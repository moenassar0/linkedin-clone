const JobOffering = require('../models/JobOffering');
const jwt = require('jsonwebtoken');

const createJobOffering = async (req, res) => {
    try {
        insertResult = await JobOffering.create(req.body)
        res.send("Job Offering created:" + insertResult)
    }

    //Check for validation and if email is taken
    catch(err) {
        if(err.name === "ValidationError"){
            res.status(401).send('Required fields are not sent!')
            return
        }
        res.status(400).send('Server problems...')
    }
}

const getAllJobOfferings = async (req, res) => {
    const offerings = await JobOffering.find();
    res.send(offerings)
}

module.exports = {
    createJobOffering,
    getAllJobOfferings
}