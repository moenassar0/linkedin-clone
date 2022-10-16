const { Router } = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const router = Router();

const { createUser, login, followCompany } = require('../controllers/UserController');
const { createCompany, getAllCompanies } = require('../controllers/CompanyController');
const { createJobOffering, getAllJobOfferings } = require('../controllers/JobOfferingController');

//Tester
router.post('/image', (req, res) => {
    let data = req.body.data;
    let buff = Buffer.from(data, 'base64');
    fs.writeFileSync('stack-abuse-logo-out.png', buff);
})

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

//Company Controller
router.post('/companies', createCompany);
router.get('/companies', getAllCompanies);

//Job Offering Controller
router.post('/jobofferings', createJobOffering);
router.get('/jobofferings', getAllJobOfferings);
module.exports = router;