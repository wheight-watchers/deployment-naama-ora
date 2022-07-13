const mongoose = require('mongoose');
const { Schema } = mongoose;
const meeting = require('./meetings.schema')
const diary = require('./diary.schema');

const usersSchema = new Schema({
    // id: { type: mongoose.Schema.Types.ObjectId, required: true },
    password: { type: number, required: true },
    firstName: { type: String, required: true, minlength: 3 },
    lastName: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true },
    address: [{ city: { type: String }, street: { type: String }, building: { type: String } }],
    height: { type: String, required: true },
    age: { type: String, required: true },
    weight: [{
        startWeight: { type: number },
        meetings: [{
            // id: {
            //     type: mongoose.Schema.Types.ObjectId,
            //     ref: 'Meeting'
            // }
            type: [meeting.meetingsSchema]
        }]
    }],
    diary: [{
        // id: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'Diary'
        // }
        type: [diary.diarySchema]
    }]
})
const UsersModel = mongoose.model('Users', usersSchema);
module.exports = UsersModel;
//   const meet1 =new _meeting({id:1,date:'13/07/2022',weight:100});
//   const meet2 =new _meeting({id:1,date:'13/07/2022',weight:100});
//   const meet3 =new _meeting({id:1,date:'13/07/2022',weight:100});