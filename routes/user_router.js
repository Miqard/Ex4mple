const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/login', (req, res) => {
  const locals = {
    title: "Login • Threads"
  }
  res.render('login', { locals });
});

router.get('/register', (req, res) => {
  const locals = {
    title: "Register • Threads"
  }
  res.render('register', { locals });
});

router.get('/profile', (req, res) => {
  const locals = {
    title: "Profile • Threads"
  }
  res.render("profile", { locals });
});

module.exports = router;