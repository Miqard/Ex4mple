const express = require('express');
const router = express.Router();

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
    res.render('profile');
});

module.exports = router;