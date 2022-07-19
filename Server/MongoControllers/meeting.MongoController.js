const { ObjectId } = require('mongodb');
const MeetingsModel=require('../Models/meetings.schema')
//const userModel=require('../Models/users.schema')
module.exports = {
    getAllTheMeetingsForUser: async (req, res) => {
        try {
            let id = req.params.id;
            let meeting = await MeetingsModel.findById(ObjectId(id));
            // meeting=meeting.Weights.meetings
            
            res.send(meeting)
        }catch(error){
            res.status(404).send(`🙄oops ${error}`)
        }
        
    },
    addMeeting: async function (req, res) {

        try{
            const meeting = req.body;
            const inserted = await MeetingsModel.Weights.meetings.insertOne(meeting);
            res.send(req.body)
        }
        catch(error){
            res.status(404).send(`🙄oops ${error}`)
        }
       
    },
    deleteMeeting: async function (req, res) {
        try{
            const _id=ObjectId(req.params.id)
            const meeting = await MeetingsModel.Weights.meetings.deleteOne(_id);
            res.send(meeting)
        }
        catch(error){
            res.status(404).send(`🙄oops ${error}`)
        }
       
    },
    updateMeeting: async function (req, res) {
        try{
            const meetingToUpdate = req.body;
            const filter = { _id: ObjectId(req.params.id) };
            const meeting = await MeetingsModel.Weights.meetings.updateOne(filter, meetingToUpdate);
            res.send(meeting)
        }
        catch(error){
            res.status(404).send(`🙄oops ${error}`)
        }
      
    }
}