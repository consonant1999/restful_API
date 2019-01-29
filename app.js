const express = require('express')
const app = express()
const UserController = require('./user/UserController')

app.use('/users', UserController)

module.exports = app