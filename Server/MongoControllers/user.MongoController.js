const { ObjectId } = require('mongodb');
const userModel = require('../Models/users.schema')

module.exports = {
    getAllUsers: async function (req, res) {
        try {
            const users = await userModel.find();
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send(`oofffffffff ${error}`);
        }
    },
    getUserById: async function (req, res) {
        if (req.params.id) {
            try {
                const id = req.params.id;
                const user = await userModel.findOne({ id: id });
                res.status(200).send(user);
            } catch (error) {
                res.status(500).send(`oofffffffff ${error}`);
            }
        }
    },
    addUser: async function (req, res) {
        if (req.body) {
            try {
                await userModel.create(req.body);
                res.status(200).send(req.body)
            } catch (error) {
                res.status(500).send(`oofffffffff ${error}`);
            }
        }
    },
    updateUserDetails: async function (req, res) {
        if (req.body && req.params.id) {
            try {
                const newUser = req.body;
                const filter = { _id: ObjectId(req.params.id) };
                await userModel.updateOne(filter, newUser);
                res.status(200).send("user was update successfully")
            } catch (error) {
                res.status(500).send(`oofffffffff ${error}`);
            }
        }
    },
    removeUser: async function (req, res) {
        if (req.params.id) {
            try {
                await userModel.deleteOne({ _id: ObjectId(req.params.id) });
                res.status(200).send(`deleted user !!!`)
            } catch (error) {
                res.status(500).send(`oofffffffff ${error}`);
            }
        }
    }
}