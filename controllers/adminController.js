const { User } = require('../models')

class AdminController {
  static home(req, res) {
    User.findAll()
      .then(users => {
        res.render('admin', { users })
      })
      .catch(err => res.send(err.message))
  }

  static promote(req, res) {
    User.update(
      { role: 'admin' },
      { where: { id: req.params.id } }
    )
      .then(() => {
        res.redirect('/admin')
      })
      .catch(err => res.send(err.message))
  }
}

module.exports = AdminController
