const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

});

const model = mongoose.model('User', userSchema);

module.exports = model;