const { ObjectId } = require('mongodb');
const meetingModel = require('../Models/users.schema')

module.exports = {
    getAllTheMeetingsForUser: async (req, res) => {
        try {
            let id = req.params.id;
            const meetings = await meetingModel.findById(ObjectId(id));
            res.send(`get meeting ${meetings}`)
        }catch(error){
            res.send(`🙄oops ${error}`)
        }
        
    },
    addMeeting: async function (req, res) {
        if (req.body) {
            const meeting = req.body;
            const inserted = await db.getDB().collection("users").insertOne(meeting);
            res.send(req.body)
        }
    },
    deleteMeeting: async function (req, res) {
        const meeting = await db.getDB().collection("users").deleteOne({ _id: ObjectId(req.params.id) });
        res.send(`delete user ${meeting}`)
    },
    updateMeeting: async function (req, res) {
        const meetingToUpdate = req.body;
        const filter = { _id: ObjectId(req.params.id) };
        const meeting = await db.getDB().collection("users").updateOne(filter, meetingToUpdate);
        res.send(`user ${meeting} updated!`)
    }
}