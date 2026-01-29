function isAdmin(req, res, next) {
  if (req.session.role !== 'admin') {
    return res.send('Forbidden: Admin only')
  }
  next()
}

module.exports = isAdmin
