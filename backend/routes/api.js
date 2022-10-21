const { Router } = require('express');
const jwt = require('jsonwebtoken');

const router = Router();

const { createUser, login, followCompany, unfollowCompany, updateUser, getUser, uploadImage, applyToJob, uploadCV} = require('../controllers/UserController');
const { createCompany, getAllCompanies } = require('../controllers/CompanyController');
const { createJobOffering, getAllJobOfferings, getCompanyJobOfferings} = require('../controllers/JobOfferingController');
const { refreshTokenUser } = require('../controllers/JWTController');

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    })
}




//User Controller
router.post('/users', createUser);
router.post('/login', login);
router.post('/test', authenticateToken, (req, res) => {
    res.status(200).send("gg worked: " + JSON.stringify(req.user));
})
router.post('/follow', authenticateToken, followCompany);
router.post('/unfollow', authenticateToken, unfollowCompany);
router.post('/update', authenticateToken, updateUser);
router.get('/user', authenticateToken, getUser);
router.post('/uploadimg', authenticateToken, uploadImage);
router.post('/apply', authenticateToken, applyToJob);
router.post('/uploadcv', authenticateToken, uploadCV);

//Company Controller
router.post('/companies', createCompany);
router.get('/companies', authenticateToken, getAllCompanies);

//Job Offering Controller
router.post('/jobofferings', authenticateToken, createJobOffering);
router.get('/jobofferings', authenticateToken, getAllJobOfferings);
router.get('/company/jobofferings', authenticateToken, getCompanyJobOfferings);

//JWT
router.post('/refresh', authenticateToken, refreshTokenUser);
module.exports = router;
