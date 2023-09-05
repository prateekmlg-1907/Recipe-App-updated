const express = require('express');
const { RegisterControll, LoginControl, ClearCookies, User } = require('../controller/user.controller');

const router = express.Router()

const auth = require('../middleware/user.middleware')

router.post('/register', RegisterControll)
router.post('/login', LoginControl)
router.get('/clear-cookies', ClearCookies)

router.get('/user', auth, User)

module.exports = router