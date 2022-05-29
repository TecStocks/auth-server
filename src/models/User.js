const User = require('./UserSchema')
const RemovedUser = require('./RemovedUserSchema')

async function removeId(id) {
  const removedUser = await RemovedUser.create({ cod: id })
  const user = await User.deleteOne({ _id: id })
  return user
}

module.exports = removeId
