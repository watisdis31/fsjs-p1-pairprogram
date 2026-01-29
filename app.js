require('dotenv').config()

const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');
const session = require('express-session');

app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: process.env.SESSION_SECRET || 'gfg-key',
    resave: false,
    saveUninitialized: false
}));

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
