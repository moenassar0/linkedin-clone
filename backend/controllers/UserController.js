const UserModel = require('../models/User');

const createUser = async (req, res) => {
    UserModel.create(req.body)
    .then((user) => res.send("User created:" + user))
    .catch(err => res.status(400).send('Error: ' + err))
    
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