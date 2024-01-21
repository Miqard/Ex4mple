const express       = require('express');
const router        = express.Router();
const jsondata      = require("../../data/profile_user.json");
const bodyParser = require('body-parser');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

//import {initializeApp} from 'MyProject/app'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcEj7gW_TWHbZmjHdOLKqo2IN5ZuPizoI",
  authDomain: "myproject-4e55f.firebaseapp.com",
  projectId: "myproject-4e55f",
  storageBucket: "myproject-4e55f.appspot.com",
  messagingSenderId: "139779912170",
  appId: "1:139779912170:web:53af2c5fc2052500284293",
  measurementId: "G-PWEEX2KJ8W"
};

initializeApp(firebaseConfig);

const db = getFirestore();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/',(req, res) => {
    const locals = {
        title: "Threads",
        data      : jsondata 
    }
    res.render('guesthome', locals);
});

router.get('/home',(req, res) => {
  const locals = {
      title: "Threads",
      data      : jsondata 
  }
  res.render('home', locals);
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