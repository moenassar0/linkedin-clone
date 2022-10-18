const mongoose = require('mongoose');

const jobOfferingsSchema = mongoose.Schema({
    job_title: {
        type: String,
        required: "Title is required!"
    },
    location: {
        type: String,
        required: "Location is required!"
    },
    schedule: {
        type: String,
        required: true,
        enum: ['Full-Time', 'Part-Time']
    },
    assoc_company: {
        type: mongoose.ObjectId,
        ref: 'Company',
        required: true
    },
    applied: [{ type : mongoose.ObjectId, ref: 'User' }]
});

const model = mongoose.model('JobOffering', jobOfferingsSchema);

module.exports = model;