const Controller = require("../controllers/controller");
const router = require('express').Router();
const routerPost = require('./post');
const routerLanding = require('./landing');
const routerAuth = require('./auth')

router.get('/', Controller.redirect);
router.use('/kitabmuka', routerLanding);
router.use('/kitabmuka', routerPost);
router.use('/kitabmuka', routerAuth);

module.exports = router;
