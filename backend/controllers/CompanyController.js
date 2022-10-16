const CompanyModel = require('../models/Company');
const jwt = require('jsonwebtoken');

const createCompany = async (req, res) => {
    try {
        insertResult = await CompanyModel.create(req.body)
        res.send("User created:" + insertResult)
    }

    //Check for validation and if email is taken
    catch(err) {
        if(err.name === "ValidationError"){
            res.status(401).send('Required fields are not sent!')
            return
        }
        res.status(409).send('Taken email!')
    }
}

const getAllCompanies = async (req, res) => {
    const companies = await CompanyModel.find();
    res.status(200).send(companies);
}

module.exports = {
    createCompany,
    getAllCompanies
}