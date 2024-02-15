

const express = require('express')

const usecontroller = require('../controllers/usercontroller')

const router = new express.Router()

router.post('/user/register',usecontroller.register)

router.post('/user/login',usecontroller.login)

module.exports = router