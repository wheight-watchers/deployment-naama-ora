const MeetingService = require('../Services/meeting.service');
module.exports = {
    getAllTheMeetingsForUser: async (req, res, next) => {
        try {
            const userId  = req.params.id;
            const meetings = await MeetingService.getAllTheMeetingsForUser(userId);
            res.send(meetings)
        }
        catch (error) {
            next(error)
        }
    },
    addMeeting: async (req, res, next) => {

        try {
            const insertMeeting = await MeetingService.addMeeting(req.body)
            res.send(insertMeeting)
        }
        catch (error) {
            next(error)
        }
    },
    deleteMeeting: async (req, res, next) => {
        try {
            const { id } = req.params;
            const deletedMeeting = await MeetingService.deleteMeeting(id);
            res.send(deletedMeeting)
        }
        catch(error) {
            next(error)
        }
    },
    updateMeeting:async(req,res,next)=>{
        try {
            const { meeting } = req.body;
            const { id } = req.params;
            const updatedMeeting = await MeetingService.updateMeeting(id, meeting);
            res.send(updatedMeeting)
        }
        catch (error) {
            next(error)
        }
    }

}





















