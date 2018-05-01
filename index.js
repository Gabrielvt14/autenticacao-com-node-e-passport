const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()

const app = express()

/**
 * PASSPORT BASIC
 */
passport.use(require('./src/auth/basic'))

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

app.get('*', passport.authenticate('basic', { session: false }))
require('./src/index')(app)

mongoose.connect('mongodb://localhost:27017/auth')

app.listen(process.env.PORT, () => {
    console.log('Server has been started at http://localhost:' + process.env.PORT)
})
