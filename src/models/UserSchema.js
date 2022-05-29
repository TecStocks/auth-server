const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  login: String,
  password: String,
  equipment: Array
})
mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')
