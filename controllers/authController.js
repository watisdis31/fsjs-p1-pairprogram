const { User } = require('../models')
const bcrypt = require('bcryptjs')
const sendWelcomeEmail = require('../helpers/sendEmail')

class AuthController {
  static loginForm(req, res) {
    res.render('login')
  }

  static login(req, res) {
    const { email, password } = req.body

    User.findOne({ where: { email } })
      .then(user => {
        if (!user) throw 'Email tidak terdaftar'

        const isValid = bcrypt.compareSync(password, user.password)
        if (!isValid) throw 'Password salah'

        req.session.userId = user.id
        req.session.role = user.role

        res.redirect('/posts')
      })
      .catch(err => {
        res.render('login', { error: err })
      })
  }

  static register(req, res) {
    const { email, password } = req.body

    User.create({ email, password, role: 'user' })
      .then(user => {
        return sendWelcomeEmail(user.email)
      })
      .then(() => {
        res.redirect('/login')
      })
      .catch(err => {
        res.render('register', { errors: err.errors })
      })
  }

  static logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/login')
    })
  }
}

module.exports = AuthController
