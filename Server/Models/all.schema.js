const mongoose = require("mongoose");
const schema = mongoose.Schema;
const { isEmail } = require('validator')
const addressSchema = new schema({
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
        min: 1
    }
})
const meetingsSchema = new Schema({
 
    date: {
         type: String,
          required: true 
        },
    weight: {
         type: Number,
          required: true 
        }
})
const meetingSchema = new mongoose.Schema({
    date: {
        type: String,
    },
    weight: {
        type: Number,
        required: true
    },
    comments: {
        type: String,
    }
})
const diarySchema = mongoose.Schema({
    date: { type: String, require: true },
    breakfast: { type: [String], require: false },
    lunch: { type: [String], require: false },
    dinner: { type: [String], require: false },
    snackingBetweenMeals: { type: [String], require: false }
})
const userSchema = new schema({
    firstName: {
        type: String,
        minlength: 2
    },
    lastName: {
        type: String,
        minlength: 2
    },
    address: addressSchema,
    phone: {
        type: String,
        minlength: 7,
        maxlength: 10
    },
    email: {
        type: String,
        unique: true,
        validate: [isEmail, 'please insert valid'],
        // match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, 'Please fill a valid email address']
    },
    height: {
        type: Number,
        minlength: 2,
        maxlength: 3
    },
    weight: {
        startWeight: {
            type: Number,
            minlength: 2,
            maxlength: 3
        },
        meetings: [meetingSchema]
    },
    diary: [diarySchema]
}, { timestamps: true })
module.exports = mongoose.model('users', userSchema);