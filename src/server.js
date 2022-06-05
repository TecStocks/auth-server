require('dotenv').config()
const app = require('./app')
const db = require('./database/mongodb')

const populate = require('./services/populateDB')

const PORT = process.env.PORT | 3002
const HOST = '0.0.0.0'

// populate()
const httpServer = require('http').Server(app)

httpServer.listen(PORT, HOST, () => {
  console.log(`Listen on port: ${PORT}, ${HOST}`)
})
