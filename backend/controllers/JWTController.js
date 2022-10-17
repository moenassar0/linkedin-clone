const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

const refreshTokenUser = async (req, res) => {
    let user_id = req.user.user._id;
    let user = await UserModel.findOne({_id: user_id});

    const access_token = jwt.sign({user}, process.env.JWT_SECRET, {expiresIn: '10h'})
    const response = {
        user,
        access_token
    }
    res.send(JSON.stringify(response));
}

module.exports = {
    refreshTokenUser
}