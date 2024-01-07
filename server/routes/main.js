const express       = require('express');
const router        = express.Router();
const fs            = require("fs");

router.get('',(req, res) => {
    const locals = {
        title: "Threads"
    }
    res.render('index', { locals });
});

router.get('/search', (req, res) => {
    res.render('search');
});

router.get('/activity', (req, res) => {
    res.render('activity');
});

router.get('/profile', (req, res) => {
  // (E) READ JSON FILE
  fs.readFile("data/profile_agra.json", "utf8", (err, data) => {
    if (err) {
      // (F) HANDLE ERROR
      res.status(500).send("Error reading user.json");
    } else {
      // (G) PARSE JSON DATA
      let user = JSON.parse(data);
      // (H) RENDER EJS TEMPLATE WITH USER DATA
      res.render("profile", { user: user });
    }
  });
});

module.exports = router;
