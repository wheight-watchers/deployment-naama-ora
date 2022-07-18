const db = require('../DB/dataBase');
const { ObjectId } = require('mongodb');

module.exports = {
    userLogin: async function (req, res) {
        const userLogin = req.query;
        const { email, password } = userLogin;
        const doc = {$set: { email:email,password:password} };
        const login_user=await db.getDB().collection("users").findOne(doc);
        res.send(`user ${login_user} welcome!!!🤩`)
    },
    managerLogin: async function (req, res) {
        const managerLogin = req.query;
        const { email, password } = managerLogin;
        const doc = {$set: { email:email,password:password}  };
        const login_user=await db.getDB().collection("users").findOne(doc);
        res.send(`manager ${login_user} welcome!!!🤑`)
    }
}