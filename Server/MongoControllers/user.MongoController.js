const { ObjectId } = require('mongodb');
const userModel = require('../Models/users.schema')

module.exports = {
    getAllUsers: async function (req, res) {
        try {
            const users = await userModel.find();
            res.send(users);
        } catch (error) {
            res.status(500).send(`oofffffffff ${error}`);
        }
    },
    getUserById: async function (req, res) {
        const id = req.params.id;
        const user = await userModel.findOne({ id: id });
        res.send(user);
    },
    addUser: async function (req, res) {
        debugger
        if (req.body) {
            try {
                await userModel.create(req.body);
                res.send(req.body)
            } catch (error) {
                res.status(500).send(`oofffffffff ${error}`);
            }
        }
    },
    updateUserDetails: async function (req, res) {
        const userToUpdate = req.body;
        const filter = { _id: ObjectId(req.params.id) };
        const user = await db.getDB().collection("users").updateOne(filter, userToUpdate);
        res.send(`user ${user} updated!`)
    },
    removeUser: async function (req, res) {
        const user = await db.getDB().collection("users").deleteOne({ _id: ObjectId(req.params.id) });
        res.send(`delete user ${user}`)
    }

}