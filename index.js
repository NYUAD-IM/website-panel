const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000
var file = ''

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  .get('/', (req, res) => res.send('Welcome the NYUAD.IM Heroku home. Visit /api/[people, workshops, academics] to view the JSON'))
  .get('/api/*', jsonLoad)
  // Third param as error handling
  // .get('/edit/*', jsonEdit, errorFunc)

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// Pull JSON data based on url request, serve to client:
function jsonLoad(req, res) {
    cutPath(req.url);
        fs.readFile("docs/data/" + file + ".json", function(err, inData) {
            if(err) {
                res.send("400, Bad Request");
            }
            var outData = JSON.parse(inData);
            res.send(outData);
        });
}

// TODO:
// function jsonEdit() {
//
// }

function cutPath(url) {
    var urlBits = url.split('/');
    var wantedBit = urlBits[urlBits.length - 1];
    file = wantedBit;
}
