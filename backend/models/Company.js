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
    }
});

const model = mongoose.model('Company', companySchema);

module.exports = model;