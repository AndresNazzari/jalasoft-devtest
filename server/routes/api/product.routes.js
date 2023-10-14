const express = require('express');
const router = express.router();
const { UserController } = require('../../controllers/user.controller');

//@route    GET /api/products
//@desc     Get all users
//@access
router.get('/', new UserController());

module.exports = router;
