const User = require('../models/UserSchema')
const user_table = require('./loginsjson.json')
const bcrypt = require('bcrypt')

const populate = async () => {
  let newTable = []
  /*  user_table.forEach(user => {

    let cars = user.Equipment.split(',')
    let name = user.name
    let login = user.Login
    let password = await bcrypt.hash(user.Password, 10)
    let equipment = cars
  }) */

  for await (user of user_table) {
    let cars = user.Equipment.split(',')
    let name = user.Username
    let login = user.Login
    let password = await bcrypt.hash(user.Password, 10)
    let equipment = cars

    User.create({ name, login, password, equipment })
  }

  /*  try {
    await User.create(user_table, { upsert: true })
  } catch (err) {
    console.log(err)
  } */
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
