const UserModel = require('../models/User');

const createUser = async (req, res) => {
    UserModel.create(req.body)
    .then((user) => res.send("User created:" + user))
    .catch(err => res.status(400).send('Error: ' + err))
    
}

module.exports = {
    createUser
}