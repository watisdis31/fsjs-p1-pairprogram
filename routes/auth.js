const router = require('express').Router()
const AuthController = require('../controllers/authController')

router.get('/login', AuthController.loginForm)
router.post('/login', AuthController.login)
router.get('/register', (req, res) => {
  res.render('register')
})
router.post('/register', AuthController.register)
router.get('/logout', AuthController.logout)

module.exports = router
