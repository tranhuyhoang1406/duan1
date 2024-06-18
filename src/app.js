const path = require('path')
const express = require('express')
const app = express()
var handlebars = require('express-handlebars')
const port = 3000
const morgan = require('morgan')
const hbs = handlebars.create()
const route = require('./routes')
const db = require('./config/db')

db.connect()

//HTTP logger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: "true"
}))
app.use(express.json())

//Template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));

//routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

