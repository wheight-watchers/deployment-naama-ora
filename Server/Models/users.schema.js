const mongoose = require('mongoose');
const { Schema } = mongoose;
const meeting = require('./meetings.schema')
const diary = require('./diary.schema');

const usersSchema = new Schema({
    id: { type: Number, required: true },
    password: { type: Number, required: true },
    firstName: { type: String, required: true, minlength: 3 },
    lastName: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true },
    address: [{ city: { type: String }, street: { type: String }, building: { type: String } }],
    height: { type: String, required: true },
    age: { type: String, required: true },
    Weights: [{
        startWeight: { type: Number },
        meetings: [
            // id: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: 'Meeting'
            // }
            { type: meeting.meetingsSchema }
        ]
    }],
    diary: [
        // id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Diary'
        // }
        { type: diary.diarySchema }
    ]
})
const UsersModel = mongoose.model('users', usersSchema);
module.exports = UsersModel;
