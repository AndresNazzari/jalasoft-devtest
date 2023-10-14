const UserService = require('../services/user.services');

class UserController {
    constructor() {
        this.userService = new UserService();

        this.getUsers = this.getUsers.bind(this);
        this.getUserById = this.getUserById.bind(this);
        this.createUser = this.createUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    async getUsers(req, res) {
        try {
            const users = await this.userService.getUsers();
            res.status(200).json({ msg: 'All users', data: users });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    async getUserById(req, res) {
        const { id } = req.params;

        try {
            const user = await this.userService.getUserById(id);
            if (!user) return res.status(404).json({ msg: 'There is no user with the given id' });

            res.status(200).json({ msg: 'One User', data: user });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    async createUser(req, res) {
        const body = req.body;

        try {
            const user = await this.userService.createUser(body);
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    async editUser(req, res) {
        const body = req.body;
        const { id } = req.params;

        try {
            const userToEdit = await this.userService.getUserById(id);
            if (!userToEdit)
                return res.status(404).json({ msg: 'There is no user with the given id' });

            const userEdited = await this.userService.editUser(userToEdit, body);
            res.status(200).json({ msg: 'User Edited', data: userEdited });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params;

        try {
            const userTodelete = await this.userService.getUserById(id);
            if (!userTodelete)
                return res.status(404).json({ msg: 'There is no user with the given id' });

            const deletedUser = await this.userService.deleteUser(id);
            res.status(200).json({ msg: 'User deleted', data: userTodelete });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }
}

module.exports = UserController;
