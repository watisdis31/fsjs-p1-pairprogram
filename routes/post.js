const Controller = require("../controllers/controller");
const router = require('express').Router();

router.get('/posts', Controller.post);
// router.get('/posts/add', Controller.postAddGet);
// router.post('/posts/add', Controller.postAddPost);
// router.get('/posts/:id/edit', Controller.postEditGet);
// router.post('/posts/:id/edit', Controller.postEditPost);
// router.get('/posts/:id/like', Controller.getLike);
// router.get('/posts/:id/delete', Controller.postDelete);

module.exports = router;