const JobOffering = require('../models/JobOffering');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const createJobOffering = async (req, res) => {
    try {
        if(req.user.company){
            req.body.assoc_company = req.user.company._id;
        }
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
    const offerings = await JobOffering.find().populate('assoc_company').lean();
    res.send(offerings)
}

const getCompanyJobOfferings = async (req, res) => {
    try{
        const company_id = req.user.company._id;
        const offerings = await JobOffering.find({assoc_company: company_id}).populate('applied').lean();
        const url = req.user.company.picture_url;
        const response = { offerings, url };
        res.send(response);
    }catch(err){
        res.status(400).send('Server problem:' + err)
    }

}

module.exports = {
    createJobOffering,
    getAllJobOfferings,
    getCompanyJobOfferings
}