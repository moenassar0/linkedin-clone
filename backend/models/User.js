const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: "First name is required!"
    },
    lname: {
        type: String,
        required: "Last name is required!"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    following: [{ type : mongoose.ObjectId, ref: 'Company' }],
    location: {type: String},
    status: {type: String}
});

const model = mongoose.model('User', userSchema);

module.exports = model;