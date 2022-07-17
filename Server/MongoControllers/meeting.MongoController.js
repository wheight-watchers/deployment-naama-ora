const db = require('../DB/dataBase');
const { ObjectId } = require('mongodb');
module.exports = {
    getAllTheMeetingsForUser: async (req, res) => {
        const id = req.params.id;
        const meetings = await db.getDB().collection("meeting").findOne(ObjectId(id));
        res.send(`get meeting ${meetings}`)
    },
    addMeeting: async function (req, res) {
        if (req.body) {
            const meeting = req.body;
            const inserted = await db.getDB().collection("meeting").insertOne(meeting);
            res.send(req.body)
        }
    },
    deleteMeeting: async function(req,res){
        const meeting = await db.getDB().collection("meeting").deleteOne({ _id: ObjectId(req.params.id) });
        res.send(`delete user ${meeting}`)
    },
    updateMeeting: async function(req,res){
        const meetingToUpdate = req.body;
        const filter = { _id: ObjectId(req.params.id) };
        const meeting = await db.getDB().collection("meeting").updateOne(filter, meetingToUpdate);
        res.send(`user ${meeting} updated!`)
    }
}