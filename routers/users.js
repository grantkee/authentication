const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();
const { authenticate } = require('../middleware');

//all users
router.get('/', authenticate, usersController.getAllUsers);

//single user by id
router.get('/:id', authenticate, usersController.getUserById);

//create user
router.post('/', authenticate, usersController.createUser);

//update user by id
router.put('/:id', authenticate, usersController.updateUserById);

//delete user by uid
router.delete('/:id', authenticate, usersController.deleteUserById);

module.exports = router;