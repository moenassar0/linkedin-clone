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
    
    //const user_id = req.user.user._id;
    //console.log(offerings[0].applied, mongoose.Types.ObjectId(user_id))
    //console.log(offerings[0].applied.includes(mongoose.Types.ObjectId(user_id).toString()))
    /*console.log(user_id);
    for(let i = 0; i < offerings.length; i++){
        let applied = offerings[i].applied;
        let id = (mongoose.Types.ObjectId(user_id).toString());
        console.log(applied);
        console.log(applied?.includes(id));
        
        //if(applied != undefined && applied.includes(mongoose.Types.ObjectId(user_id))){
            //console.log("enter");
            //offerings[i].youApplied = true;
        //}
    }*/

    res.send(offerings)
}

const getCompanyJobOfferings = async (req, res) => {
    console.log(req.user);
    const company_id = req.user.company._id;
    const offerings = await JobOffering.find({assoc_company: company_id}).populate('applied')
    
    //const user_id = req.user.user._id;
    //console.log(offerings[0].applied, mongoose.Types.ObjectId(user_id))
    //console.log(offerings[0].applied.includes(mongoose.Types.ObjectId(user_id).toString()))
    /*console.log(user_id);
    for(let i = 0; i < offerings.length; i++){
        let applied = offerings[i].applied;
        let id = (mongoose.Types.ObjectId(user_id).toString());
        console.log(applied);
        console.log(applied?.includes(id));
        
        //if(applied != undefined && applied.includes(mongoose.Types.ObjectId(user_id))){
            //console.log("enter");
            //offerings[i].youApplied = true;
        //}
    }*/

    res.send(offerings)
}

module.exports = {
    createJobOffering,
    getAllJobOfferings,
    getCompanyJobOfferings
}