const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const userController = require('../controller/user_controller');
const searchController = require('../controller/search_controller');
const messageConntroller = require('../controller/messages_controller');
const notificationConntroller = require('../controller/notification_controller');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile', userController.userDetails);
router.get('/search', searchController.searchUser);
router.get('/message', messageConntroller.messageUser);
router.get('/notification', notificationConntroller.notificationUser);


module.exports = router;