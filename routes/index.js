const router = require('express').Router()

router.use('/', require('./auth'))
router.use('/posts', require('./post'))

module.exports = router
