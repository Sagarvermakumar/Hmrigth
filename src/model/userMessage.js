const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter valid Name"],
    },
    email: {
        type: String,
        required: [true, "Enter valid Email"],
    },
    number: {
        type: Number,
        required: [true, "Enter valid number"],
        min: 10
    },
    message: {
        type: String,
        required: [true, "Enter your message"],
    },
    date:{
        type:Date,
        default:Date.now() //yyyy mm ddhh mm sssz
    }
});

//create a collection
const User = mongoose.model("UserMessage", userSchema);
module.exports = User;