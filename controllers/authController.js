const { User } = require('../models')
const bcrypt = require('bcryptjs')
const sendWelcomeEmail = require('../helpers/sendEmail')

class AuthController {
  static loginForm(req, res) {
    res.render('loginForm', {error: null});
  }

  static login(req, res) {
    const { email, password } = req.body

    if (!email) return res.render('loginForm', { error: 'Email required!' });
    if (!password) return res.render('loginForm', { error: 'Password required!' });

    User.findOne({ where: { email } })
      .then(user => {
        if (!user) throw 'Email is not registered'

        const isValid = bcrypt.compareSync(password, user.password)
        if (!isValid) throw 'Password is incorrect'

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
    res.render('registerForm', {errors: null, oldData: {}});
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
        if (err.name === 'SequelizeValidationError') {
          const errors = err.errors.map(el => el.message).join('; ');
          res.render('registerForm', { errors, oldData: req.body });
        } else {
          res.send(err);
        }
      })
  }

  static logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/kitabmuka/login')
    })
  }
}

module.exports = AuthController
