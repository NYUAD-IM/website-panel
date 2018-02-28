const express = require('express')
const bp = require('body-parser')
const pug = require('pug');
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')

//console.log(process.env.EDIT_PASSWORD);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(cors())
  .use(bp.json())
  .use(bp.urlencoded({ extended: true }))
  .set('views', 'public/views')
  .set('view engine', 'pug')

  .get('/', (req, res) => res.send('Welcome the NYUAD.IM Heroku home. Visit /api/[people, workshops, academics] to view the JSON'))
  .get('/api/*', jsonLoad)
  .get('/edit/*', jsonEdit)
  .post('/save/*', jsonSave)

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// Pull JSON data based on url request, serve to client:
function jsonLoad(req, res) {
    let file = cutPath(req.url);
        fs.readFile("docs/data/" + file + ".json", function(err, inData) {
            if(err) {
                res.send("400, Bad Request")
            }
            let outData = JSON.parse(inData)
            res.send(outData)
        });
}

function jsonEdit(req, res) {
    let file = cutPath(req.url)
    res.header('Access-Control-Allow-Origin', 'nyuad-im.github.io')
    let pugData
    fs.readFile("docs/data/"+file+".json", function(err, inData) {
        if(err) {
            res.send("400, Bad request")
        }
        pugData = JSON.parse(inData)
        res.render(file+'.pug', {"data": pugData})
    })
}

function jsonSave(req, res) {
    // Recieve output JSON from pugg'd script
    let file = cutPath(req.url)

    console.log(req.body);

    res.send({msg: 'done'})
}

function cutPath(url) {
    let urlBits = url.split('/');
    let wantedBit = urlBits[urlBits.length - 1];
    return wantedBit
}
