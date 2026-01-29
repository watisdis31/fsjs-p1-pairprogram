const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/adminController')
const isLogin = require('../middlewares/isLogin')
const isAdmin = require('../middlewares/isAdmin')

router.get('/', isLogin, isAdmin, AdminController.home)
router.get('/promote/:id', isLogin, isAdmin, AdminController.promote)

module.exports = router
