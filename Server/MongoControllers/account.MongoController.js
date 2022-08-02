const userModel = require('../Models/users.schema')
const { ObjectId } = require('mongodb');

module.exports = {
    userLogin: async function (req, res) {
        try{
        const userLogin = req.query;
        const { email, password } = userLogin;
        const doc = {$set: { email:email,password:password} };
        const login_user=await userModel.findOne(doc);
        alert('welcome!!!🤩');
        res.send(login_user);
    }catch(error){
        res.status(500).send(`oofffffffff ${error}`);
    }
    },
    managerLogin: async function (req, res) {
        try{
        const managerLogin = req.query;
        const { email, password } = managerLogin;
        const doc = {$set: { email:email,password:password}  };
        const login_user=await userModel.findOne(doc);
        console.log("welcome!!!🤑");
        res.send(login_user);
        }catch(error){
            res.status(500).send(`oofffffffff ${error}`);
        }
    }
}