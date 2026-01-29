const express = require('express');
const ProfileController = require('../controllers/profileController');
const router = express.Router();
const isLogin = require('../middlewares/auth');

router.get("/profile/:id", isLogin, ProfileController.userProfile)

module.exports=router