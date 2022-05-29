const mongoose = require('mongoose')

const RemovedUserSchema = new mongoose.Schema({
  cod: String
})
mongoose.model('RemovedUser', RemovedUserSchema)

module.exports = mongoose.model('RemovedUser')
