const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* const login = require('./routes/Usuario.routes')
app.use('/user', login)

const admin = require('./routes/Admin.routes')
app.use('/admin', admin)
 */

const hello = require('./routes/Hello.routes.js')
app.use('/', hello)

const admin = require('./routes/Admin.routes')
app.use('/', admin)

const login = require('./routes/Usuario.routes')
app.use('/', login)

module.exports = app
