const { ObjectId } = require('mongodb');
const meetingModel = require('../Models/users.schema')

module.exports = {
    getAllTheMeetingsForUser: async (req, res) => {
        try {
            let id = req.params.id;
            let meeting = await meetingModel.findById(ObjectId(id));
            meeting=meeting.Weights.meetings
            
            res.send(`get meeting ${meeting}`)
        }catch(error){
            res.status(404).send(`🙄oops ${error}`)
        }
        
    },
    addMeeting: async function (req, res) {

        try{
            const meeting = req.body;
            const inserted = await meetingModel.Weights.meetings.insertOne(meeting);
            res.send(req.body)
        }
        catch(error){
            res.status(404).send(`🙄oops ${error}`)
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