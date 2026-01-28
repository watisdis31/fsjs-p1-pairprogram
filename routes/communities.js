const express = require('express');
const CommunityController = require('../controllers/communityController');
const router = express.Router();

router.get('/',CommunityController.communities);
router.get('/add',CommunityController.getAddCommunity);
router.post('/add',CommunityController.postAddCommunity);
router.get('/:id', CommunityController.communityDetail);
router.post('/:id/join',CommunityController.joinCommunity);
router.post('/:id/posts/add', CommunityController.addCommunityPost);

module.exports=router