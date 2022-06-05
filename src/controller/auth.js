const User = require('../models/UserSchema')
const bcrypt = require('bcrypt')

const authenticate = async (login, password) => {
  try {
    let data = await User.findOne({ Login: login })
    let hash = await bcrypt.compare(password, data.Password)
    console.log(data)
    console.log(hash)
    if (hash) {
      return data
    } else {
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = authenticate
