const Controller = require("../controllers/controller");
const PostController = require("../controllers/postController");
const router = require('express').Router();
const isLogin = require('../middlewares/auth');

router.get('/posts',isLogin , PostController.post);
// router.get('/posts/add', Controller.postAddGet);
// router.post('/posts/add', Controller.postAddPost);
// router.get('/posts/:id/edit', Controller.postEditGet);
// router.post('/posts/:id/edit', Controller.postEditPost);
// router.get('/posts/:id/like', Controller.getLike);
// router.get('/posts/:id/delete', Controller.postDelete);

module.exports = router;
