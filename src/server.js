require('dotenv').config()
const app = require('./app')
const db = require('./database/mongodb')

const populate = require('./services/populateDB')

const PORT = process.env.PORT | 3000
const HOST = '127.0.0.1'

// populate()
const httpServer = require('http').Server(app)

httpServer.listen(PORT, HOST, () => {
  console.log(`Listen on port: ${PORT}, ${HOST}`)
})
