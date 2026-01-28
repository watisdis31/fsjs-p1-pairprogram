const express = require('express');
const PostController = require('../controllers/postController');
const router = express.Router();

router.get("/",PostController.post)
router.get("/add",PostController.getAddPost)
router.post("/add",PostController.postAddPost)
router.get("/:id/edit",PostController.getEditPost)
router.post("/:id/edit",PostController.postEditPost)
router.get("/:id/delete",PostController.deletePost)
router.get("/:id/like",PostController.likePost)

module.exports=router