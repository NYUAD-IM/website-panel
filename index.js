const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

  // Third param as error handling
  .get('/', (req, res) => res.send('Hello'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// fs.readfile()
// json.parse
//

// /api/json to show data
// /edit to allow editing
// / for home
