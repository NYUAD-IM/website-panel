const express = require('express')
const pug = require('pug');
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')
let file = ''

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(cors())
    .set('views', 'public/views')
    .set('view engine', 'pug')

    .get('/', (req, res) => res.send('Welcome the NYUAD.IM Heroku landing. Visit /api/* or /edit/* for the JSON data pages.'))
    .get('/api/*', jsonLoad)
    .get('/edit/*', jsonEdit)

    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// TODO: Could the load and edit functions be merged? Rather similar. Also, why can't this be an express-style function?
// Pull JSON data based on url request, serve to client:
function jsonLoad(req, res) {
    let outData
    cutPath(req.url);
    fs.readFile("docs/data/" + file + ".json", (err, inData) => {
        // TODO: Edit to avoid hard server crashes:
        if (err) {
            res.status(404).send('Bad Request');
        }
        outData = JSON.parse(inData)
        res.send(outData)
    })
}

function jsonEdit(req, res) {
    res.header('Access-Control-Allow-Origin', 'nyuad-im.github.io')
    let pugData
    cutPath(req.url);
    fs.readFile("docs/data/" + file + ".json", (err, inData) => {
        // TODO: Edit to avoid hard server crashes:
        if (err) {
            res.status(400).send('Bad Request');
        }
        pugData = JSON.parse(inData)
        // Serve the requested section based on the pug spec:
        res.render(file + '.pug', {"data": pugData})
    })
}

function jsonWrite(req, res) {
    // Recieve output JSON from pugg'd script?
}

function cutPath(url) {
    let urlBits = url.split('/');
    let wantedBit = urlBits[urlBits.length - 1];
    console.log(file);
    file = wantedBit;
}
