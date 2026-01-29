const Controller = require("../controllers/controller");
const router = require('express').Router();
const routerPost = require('./post');
const routerLanding = require('./landing');
const routerAuth = require('./auth');
const communityRouter = require('./communities');
const profileRouter = require('./profiles');


router.get('/', Controller.redirect);
router.use('/kitabmuka', routerLanding);
router.use('/kitabmuka', routerPost);
router.use('/kitabmuka', routerAuth);
router.use('/kitabmuka',profileRouter);
router.use('/kitabmuka',communityRouter);
router.use('/kitabmuka',profileRouter);

module.exports = router;