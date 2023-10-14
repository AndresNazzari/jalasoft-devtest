const express = require('express');
const UserController = require('../../controllers/user.controller');

class UserRoute extends express.Router {
    constructor() {
        super();
        this.userController = new UserController();

        //@route    GET api/user
        //@desc     Get all users
        //@access   Public
        this.get('/', this.userController.getUsers);

        //@route    GET api/user:id
        //@desc     Get user by id
        //@access   Public
        this.get('/:id', this.userController.getUserById);

        //@route    POST api/user
        //@desc     Create a new user
        //@access   Public
        this.post('/', this.userController.createUser);

        //@route    Put api/user
        //@desc     edirt a  user
        //@access   Public
        this.put('/:id', this.userController.editUser);

        //@route    Delete api/user
        //@desc     delete a  user
        //@access   Public
        this.delete('/:id', this.userController.deleteUser);
    }
}

module.exports = UserRoute;
