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

        if (user.role === 'admin') {
          res.redirect('/kitabmuka/admin');
        } else {
          res.redirect('/kitabmuka/posts');
        }
      })
      .catch(err => {
        res.render('loginForm', { error: err })
      })
  }

  static registerForm (req, res) {
    res.render('registerForm');
  }

  static register(req, res) {
    const { username,email, password} = req.body

    User.create({ username,email, password, role: 'user' })
      .then(user => {
      sendWelcomeEmail(user.email)
        .then(() => console.log('EMAIL SENT'))
        .catch(err => console.log('EMAIL ERROR >>>', err))
        res.redirect('/kitabmuka/login')
      })
      .catch(err => {
        console.log('REGISTER ERROR >>>', err)
        res.render('registerForm')
      })
  }

  static logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/kitabmuka/login')
    })
  }
}

module.exports = AuthController
