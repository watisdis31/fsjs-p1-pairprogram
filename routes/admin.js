const router = require('express').Router();
const AdminController = require('../controllers/adminController');
const isLogin = require('../middlewares/auth');
const {isAdmin} = require('../middlewares/isAdmin');

router.get('/admin', isLogin, isAdmin, AdminController.dashboard);
router.post('/admin/add', isLogin, isAdmin, AdminController.addAdmin);
router.post('/admin/delete-posts', isLogin, isAdmin, AdminController.deleteAllPosts);

module.exports = router;