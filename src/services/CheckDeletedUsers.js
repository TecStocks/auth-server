const User = require('../models/UserSchema')
const RemovedUser = require('../models/RemovedUserSchema')
const populate = require('../services/populateDB')



const CheckDeletedUsersService = async () => {
    await populate()
    try {
      
      const removed = await RemovedUser.find()

     for await (removeds of removed){
         user = await User.findOne({_id: removeds.cod})
         
         if (user) {
            await User.deleteOne({ _id: removeds.cod })
         }
     }
     
    } catch (err) {

    }
  }

  module.exports = CheckDeletedUsersService