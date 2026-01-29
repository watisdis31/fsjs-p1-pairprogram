const AuthController = require("../controllers/authController");
const router = require('express').Router();

router.get('/login', AuthController.loginForm);
router.post('/login', AuthController.login);
router.get('/register', AuthController.registerForm);
router.post('/register', AuthController.register);
router.get('/logout', AuthController.logout);

module.exports = router;
