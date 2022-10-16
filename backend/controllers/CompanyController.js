const CompanyModel = require('../models/Company');
const UserModel = require('../models/User');
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
    const user_following = req.user[0].following;
    const companies = await CompanyModel.find().lean();

    for(let i = 0; i < companies.length; i++){
        if(user_following.includes(companies[i]._id.toString())){
            companies[i].following = true;
        }
    }
    res.status(200).send(companies);
}

module.exports = {
    createCompany,
    getAllCompanies
}