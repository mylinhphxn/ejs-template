const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = "My Home Page";
  var heading = "My Website";
  res.render('pages/index', {
    'title':title,
    'heading':heading
  })
})

app.get('/amethyst', (req, res) => {
  var title = "Amethyst Page";
  var heading = "My Website"
    res.render('pages/amethyst', {
    'title':title,
    'heading':heading
  })
})

app.get('/rose-quartz', (req, res) => {
  var title = "Rose Quartz Page";
  var heading = "My Website"
    res.render('pages/rose-quartz', {
    'title':title,
    'heading':heading
  })
})

app.get('/sunstone', (req, res) => {
  var title = "Sunstone Page";
  var heading = "My Website"
    res.render('pages/sunstone', {
    'title':title,
    'heading':heading
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


