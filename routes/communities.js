const express = require('express');
const CommunityController = require('../controllers/communityController');
const router = express.Router();
const isLogin = require('../middlewares/auth');

router.get('/communities',CommunityController.communities);
router.get('/communities/add',CommunityController.getAddCommunity);
router.post('/communities/add',CommunityController.postAddCommunity);
router.get('/communities/:id', CommunityController.communityDetail);
router.post('/communities/:id/join', isLogin, CommunityController.joinCommunity);
router.post('/communities/:id/leave', isLogin, CommunityController.leaveCommunity);
router.post('/communities/:id/posts/add', CommunityController.addCommunityPost);

module.exports=router