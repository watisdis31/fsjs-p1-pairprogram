const nodemailer = require('nodemailer')

function sendWelcomeEmail(toEmail) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: true
    }
  })

  return transporter.sendMail({
    from: `KitabMuka <${process.env.EMAIL}>`,
    to: toEmail,
    subject: 'Welcome to KitabMuka!',
    text: 'Your account has been created! 🎉'
  })
}

module.exports = sendWelcomeEmail
