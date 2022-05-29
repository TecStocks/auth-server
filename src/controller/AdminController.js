const bcrypt = require('bcrypt')
require('dotenv').config()
const User = require('../models/UserSchema')
const jwt = require('jsonwebtoken')

const secret = process.env.SECRET

class AdminController {
  async create(req, res) {
    try {
      /* hash password */

      const hashedPassword = await bcrypt.hash(req.body.password, 10)

      User.create(
        {
          name: req.body.name,
          login: req.body.login,
          password: hashedPassword,
          equipment: req.body.equipment
        },
        (err, user) => {
          if (err) {
            console.log(err)
          } else {
            console.log(user)
          }
          const token = jwt.sign({ id: user._id }, secret, {
            expiresIn: '15m'
          })
          res.status(201).send({ auth: true, token: token })
        }
      )
    } catch {
      res.status(500).send('There was a problem registering the user')
    }
  }

  async list(req, res) {
    User.find({}, (err, users) => {
      if (err)
        return res.status(500).send('There was a problem finding the users')
      res.status(200).send(users)
    })
  }

  async listUser(req, res) {
    User.findById(req.params.id, (err, user) => {
      if (err)
        return res.status(500).send('There was a problem finding the user')
      if (!user) return res.status(400).send('No user found.')
      res.status(200).send(user)
    })
  }

  async deleteUser(req, res) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).send('There was a problem deleting the user.')
      }
      res.status(200).send('User:' + user.name + 'was deleted.')
    })
  }

  async updateUser(req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, user) => {
        if (err)
          return res.status(500).send('There was a problem updating the user.')
        res.status(200).send(user)
      }
    )
  }
}

module.exports = AdminController
