const jwt = require('jsonwebtoken');
const passport = require('passport');
const _ = require('lodash');

module.exports = {
    users:any = [
        {
            username: 'lokesh',
            password: 'password123admin',
            role: 'admin'
        }, {
            username: 'Nishant',
            password: 'password123member',
            role: 'member'
        }
    ],
    authenticate :function(req, res, next) {
        const { username, password } = req.body;
                const user = this.users.find(u => { return u.username === username });
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
    },


    generateJwt : function (req,res,next) {

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
    },

    testmethod : function (req,res){
        console.log("token validatedS")
        return res.status(200).json("Cool");
    }

}