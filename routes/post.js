const Controller = require("../controllers/controller");
const PostController = require("../controllers/postController");
const router = require('express').Router();
const isLogin = require('../middlewares/auth');
const isOwner = require('../middlewares/isOwner');

router.get('/posts', isLogin, PostController.post);
router.get('/posts/add', isLogin, PostController.getAddPost);
router.post('/posts/add', isLogin, PostController.postAddPost);
router.get('/posts/:id/edit', isLogin, isOwner, PostController.getEditPost);
router.post('/posts/:id/edit', isLogin, isOwner, PostController.postEditPost);
router.get('/posts/:id/like', isLogin, PostController.likePost);
router.get('/posts/:id/delete', isLogin, isOwner, PostController.deletePost);


module.exports = router;
