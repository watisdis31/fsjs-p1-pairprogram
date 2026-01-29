const { User, Post } = require('../models');

class AdminController {
  static async dashboard(req, res) {
    try {
      const users = await User.findAll({
        where: { role: 'user' },
        attributes: ['id', 'username', 'email']
      });

      const admins = await User.findAll({
        where: { role: 'admin' },
        attributes: ['id', 'username', 'email']
      });

      res.render('adminDashboard', { users, admins });
    } catch (error) {
      res.send(error);
    }
  }

  static async addAdmin(req, res) {
    try {
      const { userId } = req.body;
      const user = await User.findByPk(userId);
      if (!user) throw 'User not found';

      await user.update({ role: 'admin' });
      res.redirect('/kitabmuka/admin');
    } catch (error) {
      res.send(error);
    }
  }

  static async deleteAllPosts(req, res) {
    try {
      await Post.destroy({ where: {} });
      res.redirect('/kitabmuka/admin');
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = AdminController;
