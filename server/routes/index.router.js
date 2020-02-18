const express = require('express');
const router = express.Router();

//const User = require('../models/user');
const User = require('../controllers/user.controller');
const Survey = require('../controllers/survey.controller');
const ImageCtr = require('../controllers/image.controller');
const jwtHelper = require('../config/jwtHelper');

//router.post('/authenticate',(req,res) => {return User.authenticate(req,res)});
//router.get( 	'/test', 
//				(req,res,next) => {return jwtHelper.verifyJwtToken(req,res,next)}, 
//				(req,res) => {return User.testmethod(req,res)}
//			);  

router.post('/authenticate', User.authenticate);
router.get( '/test', jwtHelper.verifyJwtToken, User.testmethod);  
router.post( '/createSurvey', jwtHelper.verifyJwtToken, Survey.CreateSurvey);  
router.post( '/addQuestion', jwtHelper.verifyJwtToken, Survey.AddQuestions);  
router.get( '/survey', jwtHelper.verifyJwtToken, Survey.GetSurveyById); 
router.delete( '/deleteSurvey', jwtHelper.verifyJwtToken, Survey.DeleteSurveyById); 
router.post( '/submitSurvey', jwtHelper.verifyJwtToken, Survey.SubmitSurvey); 
router.get( '/surveyResponse', jwtHelper.verifyJwtToken, Survey.GetSurveyResponse); 
router.get( '/resizeImage', jwtHelper.verifyJwtToken,ImageCtr.Download , ImageCtr.Resize);

module.exports = router;



