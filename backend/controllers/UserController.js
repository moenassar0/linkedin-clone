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
            console.log("gg");
            res.send(access_token);
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

module.exports = {
    createUser,
    login
}