const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();
const { authenticate } = require('../middleware');

//all users
router.get('/', usersController.getAllUsers);

//single user by id
router.get('/:id', usersController.getUserById);

//create user
router.post('/', usersController.createUser);

//update user by id
router.put('/:id', usersController.updateUserById);

//delete user by uid
router.delete('/:id', usersController.deleteUserById);

module.exports = router;