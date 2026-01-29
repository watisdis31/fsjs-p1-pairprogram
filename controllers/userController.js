const { User } = require('../models')
const bcrypt = require('bcryptjs')

class UserController {
  static loginPost(req, res) {
    const { email, password } = req.body

    User.findOne({ where: { email } })
      .then(user => {
        if (!user) {
          return res.send('Invalid email / password')
        }

        const isValid = bcrypt.compareSync(password, user.password)
        if (!isValid) {
          return res.send('Invalid email / password')
        }

        req.session.userId = user.id
        req.session.role = user.role

        if (user.role === 'admin') {
          return res.redirect('/admin')
        } else {
          return res.redirect('/posts')
        }
      })
      .catch(err => {
        res.send(err.message)
      })
  }
}

module.exports = UserController
