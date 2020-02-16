const _ = require('lodash');

module.exports = {
    
    survey:any = {
        "surveys": [
            {
                "SurveyId": 1,
                "Questions": [
                    {
                        "Id": 1,
                        "Question": "Q1"
                    },
                    {
                        "Id": 2,
                        "Question": "Q2"
                    },
                    {
                        "Id": 3,
                        "Question": "Q3"
                    }
                ]
            }
        ]
    },

    question:{
    },

    result:any = {
        "responses":[]
    },

    CreateSurvey : function(req){
    	console.log('In DB CreateSurvey');
    	console.log(req.body);
    	var survey = this.survey.surveys.find( s => {return s.SurveyId === req.body.SurveyId});
    	if(survey){
    		response = {
				"Error" : "Survey already exists with this Id"
			}
			return response;
    	}
    	else{    		
			this.survey.surveys.push(req.body);
    	}
		response = this.survey
		return response;
    },

    AddQuestions : function(req){
    	console.log('In AddQuestion');
    	console.log(req.body);
    	var survey = this.survey.surveys.find( s => {return s.SurveyId === req.body.SurveyId});
    	console.log(survey);
    	if(survey){
    		req.body.Questions.forEach(
    			q => survey.Questions.push(q)
    		);
    		response = this.survey
    	}
    	else{
    		response = {
				"Error" : "Survey does not exist"
			}
    	}
		return response;
    },

    GetSurveyById : function(surveyId){
    	var survey = this.survey.surveys.find( s => {return s.SurveyId == surveyId});
    	if(!survey){
    		 return response = {
				"Error" : "Survey does not exist"
			}
    	}
		return survey;
    },

    GetAllSurveys : function(){
    	return this.survey.surveys;
    },

    DeleteSurveyById : function(surveyId){
    	var survey = this.survey.surveys.filter(function(s, index, arr){
		    return s.SurveyId != surveyId

		});
    	this.survey=survey;
    	return this.survey;
    },

    DeleteAllSurveys : function(){
    	this.survey.surveys =[];
        this.result.responses = [];
    	var response = {
    		"Message":"Surveys deleted successfully",
    		"surveys": this.survey
    	};
    	return response;
    },

    SubmitSurvey : function(req){
        console.log('In DB');
        console.log(req.body); 
        var survey = this.survey.surveys.find( s => {return s.SurveyId == req.body.SurveyId});
        if(!survey){
             return response = {
                "Error" : "Survey does not exist"
            }
        }       
        this.result.responses.push(req.body);
        return this.result;
    },

    GetSurveyResponseById : function(surveyId){
        console.log(surveyId);
        var result = this.result.responses.filter(function(s, index, arr){
            return s.SurveyId == surveyId

        });
        return result;
    },

    GetAllSurveyResponse : function(){
        return this.result;
    }
}

