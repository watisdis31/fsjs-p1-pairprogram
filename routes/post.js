const express = require('express')
const router = express.Router()
const isLogin = require('../middlewares/auth')

router.use(isLogin)

router.get('/', (req, res) => {
  res.send('POST LIST')
})

router.get('/add', (req, res) => {
  res.send('ADD POST')
})

module.exports = router
