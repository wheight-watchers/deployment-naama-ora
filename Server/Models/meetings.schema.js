const mongoose = require('mongoose');
const { Schema } = mongoose;

const meetingsSchema = new Schema({
    id: { type: mongoose.Schema.Types.ObjectId, required: true },
    date: { type: String, required: true },
    weight: { type: Number, required: true }
})
const MeetingsModel = mongoose.model('Meetings', meetingsSchema);
module.exports = {MeetingsModel,meetingsSchema};
