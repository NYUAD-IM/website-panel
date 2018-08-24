const express = require('express')
const bp = require('body-parser')
const pug = require('pug');
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')
let file = ''

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(cors())
    .use(bp.json())
    .use(bp.urlencoded({extended: true}))
    .set('views', 'public/views')
    .set('view engine', 'pug')

    .get('/', (req, res) => res.redirect('/edit/'))
    .get('/api/*', jsonLoad)
    .get('/edit/*', jsonEdit)
    .get('/archive', jsonArchive)
    .post('/save/*', jsonSave)

    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// Pull JSON data based on url request, serve to client:
function jsonLoad(req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    let outData
    cutPath(req.url)
    fs.readFile('public/data/' + file + '.json', (err, inData) => {
        if (err) {
            res.status(400)
            res.send({error: err})
        }
        outData = JSON.parse(inData)
        res.send(outData)
    })
}

function jsonEdit(req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    let pugData
    cutPath(req.url)
    fs.readFile('public/data/' + file + '.json', (err, inData) => {
        if (err) {
            res.status(400)
            res.send({error: err})
        }
        pugData = JSON.parse(inData)
        // Serve the requested section based on the pug spec:
        res.render(file + '.pug', {'data': pugData})
    })
}

function jsonArchive(req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    fs.readdir('public/archive', (err, files) => {
        if (err) { // Error handle reading
            res.status(400)
            res.send({error: err + ' parsing archive directory.'})
        } else {
            res.render('archive.pug', {data: files})
        }
    })
}

function jsonSave(req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    let date = dateString();
    cutPath(req.url)

    // Save the current version (just before updates) to the archive:
    let toArchive
    fs.readFile('public/data/' + file + '.json', (err, inData) => { // Read in the unedited data
        if (err) { // Error handle reading
            res.status(400)
            res.send({error: err})
        } else {
            let archiveName = file + '_' + date + '.json'; // Format the archive filename
            fs.writeFile('public/archive/' + archiveName, inData, (err) => { // Write to the archive
                if (err) { // Error handle writing
                    res.status(400)
                    res.send({error: err + ' backing up to archive.'})
                }
            })
        }
    })

    // Save the newly updated version to the data folder:
    console.log(req.body.data);
    fs.writeFile('public/data/' + file + '.json', JSON.stringify(req.body.data), (err) => {
        if (err) {
            res.status(400)
            res.send({error: err})
        }else{
	          res.status(200)
	          res.send({message: 'successfully saved ' + file + '!'})
	      }
    })
}

function cutPath(url) {
    let urlBits = url.split('/');
    let wantedBit = urlBits[urlBits.length - 1];
    file = wantedBit;
}

function dateString() {
    let date = new Date()
    let d = ''
    let y = date.getFullYear()
    d += y
    d += "-" + (date.getMonth()+1)
    d += "-" + date.getDate()
    d += "-" + date.getHours()
    d += ('0' + date.getMinutes()).slice(-2) // getMinutes Returns 0-59, so for consistency,
    d += ('0' + date.getSeconds()).slice(-2) // add a 0 but use only the rightmost two numbers.
    return d
}
