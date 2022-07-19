const mongoose = require('mongoose');
const { Schema } = mongoose;

const meetingsSchema = new Schema({
    date: { type: String, required: true },
    weight: { type: Number, required: true }
})
const MeetingsModel = mongoose.model('meetings', meetingsSchema);
module.exports = {MeetingsModel,meetingsSchema};