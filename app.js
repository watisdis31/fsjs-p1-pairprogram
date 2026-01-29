const express = require('express');
const session = require('express-session');
const router = require('./routes');
const app = express()
const port = 3035

app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'gfg-key',
    resave: false,
    saveUninitialized: false
}));

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
