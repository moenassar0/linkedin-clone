const UserModel = require('../models/User');

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
    UserModel.find({ email: req.body.email, password: req.body.password}).exec()
    .then((user) => res.send("User found:" + user))
    .catch(err => res.status(400).send('Error: ' + err))
}

module.exports = {
    createUser,
    login
}