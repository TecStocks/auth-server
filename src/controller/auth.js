const User = require('../models/UserSchema')
const bcrypt = require('bcrypt')

const authenticate = async (login, password) => {
  let data = await User.find({ login: login })
  console.log(data)
  try {
    let hash = await bcrypt.compare(password, data[0].password)
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
