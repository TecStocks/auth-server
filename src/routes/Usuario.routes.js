const express = require('express')
const router = express.Router()
const UsuarioController = require('../controller/UsuarioController')
const { login, token, logout, remove } = new UsuarioController()

// router.post('/create', create)
router.post('/login', login)
router.get('/me', token)
router.get('/logout', logout)
router.post('/remove', remove)

module.exports = router
