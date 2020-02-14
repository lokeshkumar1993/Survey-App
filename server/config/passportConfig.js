const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use(
    new localStrategy({ usernameField: 'username', passwordField:'password' },
        (username, password, done) => {
            const user = User.find(u => { return u.username === username });
            if (!user)
                return done(null, false, { message: 'Email is not registered' });
            // wrong password
            else if (!(u.username === password))
                return done(null, false, { message: 'Wrong password.' });
            // authentication succeeded
            else
                return done(null, user);
        })
);