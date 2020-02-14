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
                if (!user)
                    return res.status(400).json('Email is not registered');
                // wrong password
                else if (!(u.username === password))
                    return res.status(400).json('Wrong password.');
                // authentication succeeded
                else
                    return res.status(200).json({ "token": generateJwt(user) });
    },


    generateJwt : function (req) {
        const { username, role } = req.body;
        return jwt.sign(
                        { 
                            username: user.username,  
                            role: user.role 
                        },
                        process.env.JWT_SECRET,
                        {
                            expiresIn: process.env.JWT_EXP
                        }
                    );
    }

}