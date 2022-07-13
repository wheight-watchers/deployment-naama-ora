const mongoose = require('mongoose');
const { Schema } = mongoose;

const diarySchema = new Schema({
    date: { type: String, required: true },
    summary: [
        {
            breakFast: [{}],
            lunch: [{}],
            dinner: [{}],
            intermediateSnack: [{}],
        }
    ]
})
const DiaryModel = mongoose.model('Diary', diarySchema);
module.exports = {DiaryModel,diarySchema};