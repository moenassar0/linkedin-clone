const UserModel = require('../models/User');
const CompanyModel = require('../models/Company');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    //Check if email is taken
    /*UserModel.find({ email: req.body.email }).exec((user) => {
        if(user.length)
        {
            res.status(409).send("Email taken");
            console.log("found");
            return
        }
        else{
            console.log("gg");
        };
    })
    

    UserModel.create(req.body)
    .then((user) => res.send("User created:" + user))
    .catch(err => res.status(400).send('Error: ' + err))*/

    try {
        insertResult = await UserModel.create(req.body)
        res.send("User created:" + insertResult)
    }
    //Check if email is taken
    catch(err) {
        res.status(409).send('Taken email')
    }
}

const login = async (req, res) => {

    try {
        //Check if user logging in is a person
        user = await UserModel.find({ email: req.body.email, password: req.body.password}).select("+password")
        if(user.length){
            console.log((JSON.stringify(user)))
            const access_token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET)
            //res.json({access_token: access_token})
            const response = {
                user,
                access_token
            }
            res.status(200).send(JSON.stringify(response));
        }
        //Check if user logging in is a company
        else{
            company = await CompanyModel.find({ email: req.body.email, password: req.body.password}).select("+password")
            if(company.length){
                console.log((JSON.stringify(company)))
                const access_token = jwt.sign(JSON.stringify(company), process.env.JWT_SECRET)
                const response = {
                    company,
                    access_token
                }
                res.send(JSON.stringify(response));
            }
            else res.send("User not found!");
        }
    }
    catch(err) {
        res.status(400).send('Server error: ' + err)
    }

    /*UserModel.find({ email: req.body.email, password: req.body.password}).exec()
    .then((user) => res.send("User found:" + user))
    .catch(err => res.status(400).send('Error: ' + err))*/
}

const followCompany = async (req, res) => {
    company_id = req.body.company_id;
    let user = await UserModel.find({_id: req.user[0]._id});
    user = user[0];

    if(user.following){
        if(user.following.includes(company_id)) {
            res.status(200).send("ok");
            return
        }
        else{
            user.following.push(company_id);
        }
    } 
    else user.following = [company_id];
    //const update = { following: [company_id] };
    user.save();
    // `doc` is the document _before_ `update` was applied
    //let doc = await UserModel.findOneAndUpdate(filter, update);
    res.status(200).send("ok" + JSON.stringify(user));
}

const unfollowCompany = async (req, res) => {
    
    const company_id = req.body.company_id;
    console.log(company_id);
    //let user = await UserModel.find({_id: req.user[0]._id});
    //user.updateOne({ $pull: { fruits: { $in: [ "apples", "oranges" ] }, vegetables: "carrots" } }
    

    //user = user[0];
    let user = await UserModel.updateOne( {_id: req.user[0]._id}, { $pull: { following: company_id } } )
    //if(user.following){
      //  user.following.pop(company_id);
    //} 
    //user.save();
    res.status(200).send("ok" + JSON.stringify(user));
}

module.exports = {
    createUser,
    login,
    followCompany,
    unfollowCompany
}