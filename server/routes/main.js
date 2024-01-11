const express       = require('express');
const router        = express.Router();
const fs            = require("fs");
const jsondata      = require("../../data/profile_user.json")

router.get('',(req, res) => {
    const locals = {
        title: "Threads"
    }
    res.render('home', { locals });
});


router.get('/search', (req, res) => {
    const locals = {
      title     : "Search • Threads",
      data      : jsondata 
    }
    res.render('search', locals);
});


router.get('/message', (req, res) => {
  const locals = {
    title: "Messages • Threads"
  }
  res.render('message', { locals });
});


router.get('/notification', (req, res) => {
  const locals = {
    title: "Notification • Threads"
  }
    res.render('notification', { locals });
});


router.get('/profile', (req, res) => {
  fs.readFile("data/profile_user.json", "utf8", (err, data) => {
    if (err) {
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
