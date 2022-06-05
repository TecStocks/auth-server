const User = require('../models/UserSchema')
const user_table = require('./loginsjson.json')
const bcrypt = require('bcrypt')

const populate = async () => {
  for await (user of user_table) {
    let cars = user.Equipment.split(',')
    let Username = user.Username
    let Login = user.Login
    let Password = await bcrypt.hash(user.Password, 10)
    let Equipment = cars

    User.create({ Username, Login, Password, Equipment })
  }
}

module.exports = populate

// require('dotenv').config()

// const connectDB = require('./db/connect')
// const Cards = require('./models/cards')

// const deck = require('./data.json')

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI)
//     await Cards.deleteMany({})
//     await Cards.create(deck)
//     console.log('Success!!')
//     process.exit(0)
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
// }

// start()
