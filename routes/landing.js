const Controller = require("../controllers/controller");
const router = require('express').Router();

router.get('/', Controller.landing);

module.exports = router;