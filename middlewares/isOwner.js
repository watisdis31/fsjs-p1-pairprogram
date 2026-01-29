const { Post } = require('../models')

async function isOwner(req, res, next) {
    try {
        const postId = req.params.id
        const post = await Post.findByPk(postId)

        if (!post) {
        return res.status(404).send('Post not found')
        }

        if (post.UserId !== req.session.userId) {
        return res.status(403).send('You are not allowed to edit this post')
        }

        next()
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = isOwner
