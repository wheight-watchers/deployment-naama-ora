const db = require('../DB/dataBase');
const { ObjectId } = require('mongodb');
module.exports = {
    getDiaryByUserId: async function (req, res){
        const id = req.params.id;
        const diaryToUser = await db.getDB().collection("users").findOne(ObjectId(id));
        res.send(`get user ${diaryToUser}`)
    },
    addDiary: async function(req,res){
        if (req.body) {
            const diary = req.body;
            const inserted = await db.getDB().collection("users").insertOne(diary);
            res.send(req.body)
        }
    },
    updateDiary: async function (req, res){
        const diaryToUpdate = req.body;
        const filter = { _id: ObjectId(req.params.id) };
        const diary = await db.getDB().collection("users").updateOne(filter, diaryToUpdate);
        res.send(`user ${diary} updated!`)
    },
    deleteDairy: async function(req,res){
        const diary = await db.getDB().collection("users").deleteOne({ _id: ObjectId(req.params.id) });
        res.send(`delete user ${diary}`)
    }
}