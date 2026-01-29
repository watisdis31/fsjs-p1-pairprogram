const { User } = require('../models')
const bcrypt = require('bcryptjs')
const sendWelcomeEmail = require('../helpers/sendEmail')

class AuthController {
  static loginForm(req, res) {
    res.render('loginForm')
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

        res.redirect('/kitabmuka/posts')
      })
      .catch(err => {
        res.render('loginForm', { error: err })
      })
  }

  static registerForm(req, res) {
    res.render('registerForm')
  }

  static register(req, res) {
    const { email, password } = req.body

    User.create({ email, password, role: 'user' })
      .then(user => {
        return sendWelcomeEmail(user.email)
      })
      .then(() => {
        res.redirect('/kitabmuka/login')
      })
      .catch(err => {
        res.render('registerForm', { errors: err.errors })
      })
  }

  static logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/kitabmuka/login')
    })
  }
}

module.exports = AuthController
