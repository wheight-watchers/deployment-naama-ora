const UserService = require('../Services/user.service');
module.exports = {
    getAllUsers: async (req, res, next) => {

        try {
            const users = await UserService.getUsersList();
            res.status(200).send(users);
        }
        catch (err) {
            console.error(err)
        }
    },
    getUserById: async (req, res, next) => {
        try {
            const user = await UserService.getUser(req.params.id);
            res.status(200).send(user);
        }
        catch (err) {
            next(err)
        }
    },
    addUser: async (req, res, next) => {

        try {
            const users = await UserService.addUser(req.body);
            res.status(200).send(users);
        }
        catch (err) {
            next(err)
        }

    },
    updateUserDetails: async (req, res, next) => {
        try {
            const users = await UserService.updateUser(req.params.id, req.body);
            res.status(200).send(users);
        }
        catch (err) {
            next(err)
        }
    },
    removeUser: async (req, res, next) => {

        try {
            const users = await UserService.deleteUser(req.params.id);
            res.status(200).send(users);
        }
        catch (err) {
            next(err)
        }
    }
}

