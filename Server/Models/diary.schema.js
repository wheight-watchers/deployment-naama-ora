const mongoose = require('mongoose');
const { Schema } = mongoose;

const diarySchema = new Schema({
    date: { type: String, required: true },
    summary: {
     BreakFast: { type: [String] },
    Lunch: { type: [String] },
    Dinner: { type: [String] },
    IntermediateSnack: { type: [String] }
 }
})
const DiaryModel = mongoose.model('Diary', diarySchema);
module.exports = { DiaryModel, diarySchema };