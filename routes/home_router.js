const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const postingController = require("../controller/posting_controller");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', postingController.viewAllPost);
router.post('/threads', postingController.addPost);

module.exports = router;