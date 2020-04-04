const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();
const { authenticate } = require('../middleware');

router.get('/', usersController.getAllUsers);

module.exports = router;