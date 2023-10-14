const { User } = require('../models');

class UserService {
    constructor() {}

    async getUsers() {
        return await User.findAll({});
    }

    async getUserById(id) {
        return await User.findOne({ where: { id: id } });
    }

    async createUser(user) {
        const newUser = await User.create(user);
        return newUser;
    }

    async editUser(userToEdit, data) {
        const userEdited = await userToEdit.update(data);
        return userEdited;
    }

    async deleteUser(id) {
        const userDeleted = await User.destroy({ where: { id: id } });
        return userDeleted;
    }
}

module.exports = UserService;
