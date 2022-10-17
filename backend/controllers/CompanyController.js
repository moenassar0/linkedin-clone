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
    
    const companies = await CompanyModel.find().lean();
    let user = req.user.user;
    console.log("company user" + user);
    user = await UserModel.findOne({_id: user._id});
    
    //user = user[0];
    const user_following = user.following;
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