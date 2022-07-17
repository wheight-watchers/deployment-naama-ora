const db = require('../DB/dataBase');
const { ObjectId } = require('mongodb');

module.exports = {
    getAllUser: async function getAllUser(req, res) {
        const user = await db.getDB().collection("users").find().toArray();
        res.send(user);
    },

    getUserById: async function getUserById(req, res) {
        const id = req.params.id;
        const user = await db.getDB().collection("users").findOne(ObjectId(id));
        res.send(`get user ${user}`)
    },
    addUser: async function addUser(req, res) {
        if (req.body) {
            const user = req.body;        
            const inserted = await db.getDB().collection("users").insertOne(user);
            res.send(req.body)
        }
    },
    updateUserDetails: async function updateUserDetails(req,res){
        const userToUpdate = req.body;          
        const filter = {_id: ObjectId(req.params.id) };
        const user= await db.getDB().collection("users").updateOne(filter,userToUpdate);
        res.send(`user ${user} updated!`)
    },
    removeUser: async function removeUser(req,res){
        const user= await db.getDB().collection("users").deleteOne({_id: ObjectId(req.params.id) });
        res.send(`delete user ${user}`)
    }
    
}