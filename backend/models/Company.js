const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    company_title: {
        type: String,
        required: "Title is required!"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    picture_url: {type: String}
});

const model = mongoose.model('Company', companySchema);

module.exports = model;