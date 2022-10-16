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
    company_id: {
        type: mongoose.ObjectId,
        required: true
    }
});

const model = mongoose.model('JobOffering', jobOfferingsSchema);

module.exports = model;