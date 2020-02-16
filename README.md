#How to run code:
1) install nodeJs
2) open terminal inside code project and run "npm install" command.
3) run "node index.js" command.
4) now end points can be verify through PostMan.

#End points details  
1) To get the bearer token (refer user.js for User profiles)  
POST --> localhost:3000/api/authenticate  
requestBody --> {  
                    "username": "lokesh",  
                    "password": "password123admin"  
                }  



All the endpoints below need bearer token received from above endpoint  
1) Following end point is used to get list of survey questions.  
GET --> localhost:4500/survey  

2)  Following end point is used to submit survey questions.  
POST --> localhost:30000/createsurvey  
requestBody --> {  
                    "SurveyId": 2,  
                    "Questions": [  
                        {  
                            "Id": 1,  
                            "Question": "Q1"  
                        },  
                        {  
                            "Id": 2,  
                            "Question": "Q2"  
                        }  
                    ]  
                }  
  
3)  Following end point is used to Get survey & its questions by Survey ID.  
GET --> localhost:3000/api/survey?id=1  
  
4)  Following end point is used to Get All surveys & its questions (Only ADMIN can access all the Surveys).  
GET --> localhost:3000/api/survey  
  
5)  Following end point is used to survey by Survey ID.  
DELETE --> localhost:3000/api/deletesurvey?id=1  
  
6)  Following end point is used to delete All surveys (Only ADMIN can access all the Surveys).  
DELETE --> localhost:3000/api/deletesurvey  

7) Following is the endpoint to submit response for a survey  
POST --> localhost:3000/api/submitsurvey  
requestBody --> {  
                    "SurveyId": 1,  
                    "Answers": [  
                    {  
                        "QuestionId": 1,  
                        "Answer": "true"  
                    },  
                    {  
                        "QuestionId": 2,  
                        "Answer": "false"  
                    }]  
                }  
  
8) Endpoint to get responses for all the surveys (Only ADMIN can access all the survey responses)  
GET  --> localhost:3000/api/surveyResponse  
  
9) Endpoint to get all the response for a specified SurveyId  
GET  --> localhost:3000/api/surveyResponse?id=1  