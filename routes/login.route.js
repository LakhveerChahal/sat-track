const express = require('express');
const loginController = require('../api/login.controller');

const router = express.Router();

router.route('/').get(loginController.login);

module.exports = router;