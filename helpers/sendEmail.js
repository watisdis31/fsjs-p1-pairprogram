const nodemailer = require('nodemailer')

function sendWelcomeEmail(toEmail) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  return transporter.sendMail({
    from: 'Social App <no-reply@app.com>',
    to: toEmail,
    subject: 'Welcome!',
    text: 'Akun kamu berhasil dibuat 🎉'
  })
}

module.exports = sendWelcomeEmail
