const mongoose = require('mongoose');

const db = ()=>{
    mongoose.connect('mongodb+srv://nassar:nassarpassword@cluster0.q6e9pn6.mongodb.net/linkedin-clone?retryWrites=true&w=majority')
    .then(()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = db;