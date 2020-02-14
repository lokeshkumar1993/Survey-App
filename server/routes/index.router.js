const express = require('express');
const router = express.Router();

const User = require('../models/user');

const jwtHelper = require('../config/jwtHelper');

router.post('/authenticate', User.authenticate);
//router.get('/userProfile',jwtHelper.verifyJwtToken, User.userProfile);  //change to retrieve survey
																			// and to post survey

module.exports = router;



