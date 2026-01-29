
const express = require('express');
const router = express.Router();


router.use('/posts',require('./posts'))
router.use('/profile',require('./profiles'))
router.use('/communities',require('./communities'))
router.use('/', require('./auth'))


module.exports=router




