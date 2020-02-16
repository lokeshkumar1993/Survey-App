const isEmpty = require('lodash.isempty');
const User = require('../models/user');
const DB = require('../models/db');
const url = require('url');
const querystring = require('querystring');

module.exports.CreateSurvey = (req, res, next) => {
	console.log(isEmpty(req.body));
	if(isEmpty(req.body)){
			response = {
				"Error" : "Request body is null"
			}
			return res.json(response);
		}
		else{
			console.log('In Else');
			var response =DB.CreateSurvey(req);
			return res.json(response);		
		}

}


module.exports.AddQuestions = (req, res, next) => {
	console.log(isEmpty(req.body));
	if(isEmpty(req.body)){
			response = {
				"Error" : "Request body is null"
			}
			return res.json(response);
		}
		else{
			var response =DB.AddQuestions(req);
			return res.json(response);		
		}

}

module.exports.GetSurveyById = (req, res, next) => {
	let id = req.query.id;
	if(id){
		var response =DB.GetSurveyById(id);
		return res.json(response);
	}
	else{
		if(req.role == 'admin'){
			var response =DB.GetAllSurveys();
			return res.json(response);
		}
		else{
			response = {
				"Error" : "Only accessible for ADMIN"
			}
			return res.json(response);
		}
	}		
}

module.exports.DeleteSurveyById = (req, res, next) => {
	let id = req.query.id;
	if(id){
		var response =DB.DeleteSurveyById(id);
		return res.json(response);
	}
	else{
		if(req.role == 'admin'){
			var response =DB.DeleteAllSurveys();
			return res.json(response);
		}
		else{
			response = {
				"Error" : "Only accessible for ADMIN"
			}
			return res.json(response);
		}
	}
}

module.exports.SubmitSurvey = (req, res, next) => {
	var response =DB.SubmitSurvey(req);
	return res.json(response);
}
