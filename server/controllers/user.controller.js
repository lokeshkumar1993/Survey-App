const jwt = require('jsonwebtoken');
const passport = require('passport');
const _ = require('lodash');
const User = require('../models/user');

  
    module.exports.authenticate = (req, res, next) => {
        const { username, password } = req.body;
                const user = User.users.find(u => { return u.username === username });
                //console.log(user);
                if (!user)
                    return res.status(400).json('Email is not registered');
                // wrong password
                else if (!(user.password === password))
                    return res.status(400).json('Wrong password.');
                // authentication succeeded
                else{
                   // console.log( user);
                    var token = this.generateJwt(user);
                    return res.status(200).json({ "token": token });
                }
    }


    module.exports.generateJwt = (req, res, next) => {

        return jwt.sign(
                        { 
                            username: req.username,  
                            role: req.role 
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: process.env.JWT_EXP
                        }
                    );
    }

    module.exports.testmethod = (req,res) => {
        console.log("token validated "+ req.role)
        return res.status(200).json("Cool");
    }