const express = require('express')
const router = express.Router()
const AdminController = require('../controller/AdminController')
const { create, list, listUser, deleteUser, updateUser } = new AdminController()

// CREATE A USER
router.post('/signup', create)

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/users', list)

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', listUser)

// DELETES A USER FROM THE DATABASE
router.delete('/:id', deleteUser)

//UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', updateUser)

module.exports = router
