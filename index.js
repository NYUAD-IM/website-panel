const express = require('express')
const pug = require('pug');
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000
let file = ''

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', 'public/views')
  .set('view engine', 'pug')

  .get('/', (req, res) => res.send('Welcome the NYUAD.IM Heroku home. Visit /api/[people, workshops, academics] to view the JSON'))
  .get('/api/*', jsonLoad)
  .get('/edit/', jsonEdit)

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// Pull JSON data based on url request, serve to client:
function jsonLoad(req, res) {
    cutPath(req.url);
        fs.readFile("docs/data/" + file + ".json", function(err, inData) {
            if(err) {
                res.send("400, Bad Request")
            }
            let outData = JSON.parse(inData)
            res.send(outData)
        });
}

function jsonEdit(req, res) {
    let pugData
    fs.readFile("docs/data/activities.json", function(err, inData) {
        if(err) {
            res.send("400, Bad request")
        }
        pugData = JSON.parse(inData)
        res.render('template-test-activities.pug', {"pugData": pugData})
    })
}

function jsonWrite(req, res) {
    // Recieve output JSON from pugg'd script
}

function cutPath(url) {
    let urlBits = url.split('/');
    let wantedBit = urlBits[urlBits.length - 1];
    file = wantedBit;
}

// console.log(pug.renderFile('views/template-test.pug', {
//     title: 'Hello'
// }))
