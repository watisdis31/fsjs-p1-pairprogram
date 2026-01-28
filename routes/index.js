const express = require('express');
const router = express.Router();
const profileRouter = require('./profiles');
const postsRouter = require('./posts');
const communityRouter = require('./communities');


router.use('/posts',postsRouter)
router.use('/profile',profileRouter)
router.use('/communities',communityRouter)

module.exports=router
