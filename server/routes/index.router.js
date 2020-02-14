const express = require('express');
const router = express.Router();

const User = require('../models/user');

const jwtHelper = require('../config/jwtHelper');

router.post('/authenticate',(req,res) => {return User.authenticate(req,res)});
router.get( 	'/test', 
				(req,res,next) => {return jwtHelper.verifyJwtToken(req,res,next)}, 
				(req,res) => {return User.testmethod(req,res)}
			);  //change to retrieve survey
																			// and to post survey

module.exports = router;



