const express = require('express');
const ProfileController = require('../controllers/profileController');
const router = express.Router();

router.get("/profile/:id", ProfileController.profile)

module.exports=router