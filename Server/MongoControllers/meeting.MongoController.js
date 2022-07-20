const { ObjectId } = require('mongodb');
//const MeetingsModel=require('../Models/meetings.schema')
const userModel = require('../Models/users.schema')
module.exports = {
    getAllTheMeetingsForUser: async (req, res) => {
        try {
            let id = req.params.id;
            const user = await userModel.findById(ObjectId(id));
            const meeting = user.Weights[0].meetings

            res.send(meeting)
        } catch (error) {
            res.status(404).send(`🙄oops ${error}`)
        }

    },
    addMeeting: async function (req, res) {

        try {
            i=0
            const meeting = req.body;
            let users = await userModel.find();
            await users.forEach(user => {
                user.Weights.meetings = [...user.Weights.meetings, meeting[i]]
                //await userModel.updateOne()
                i=i+1;
            })

            let meetingInsert = await userModel.find();
            res.send(meetingInsert)
        }
        catch (error) {
            res.status(404).send(`🙄oops ${error}`)
        }

    },
    deleteMeeting: async function (req, res) {
        try {
            // const _id = req.params.id
            let users = await userModel.find();
             users.forEach  (async (user)=>{
                await user.Weights[0].deleteOne({ _id: ObjectId(req.params.id) })
                // .deleteOne( user.Weights[0].meetings._id)
               // u.Weights[0].meetings.r
            })        
            let updateUsers = await userModel.find();  
            res.send(updateUsers)
        }
        catch (error) {
            res.status(404).send(`🙄oops ${error}`)
        }

    },
    updateMeeting: async function (req, res) {
        debugger
        try {
            const meetingToUpdate = req.body;
            const filter = { _id: ObjectId(req.params.id) };
            await userModel.updateOne(filter, meetingToUpdate);
            res.send("was update")
        }
        catch (error) {
            res.status(404).send(`🙄oops ${error}`)
        }

    }
}