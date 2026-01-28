const express = require('express');
const profileController = require('../controllers/profileControler');
const router = express.Router();

router.get("/:id",profileController.profile)

module.exports=router