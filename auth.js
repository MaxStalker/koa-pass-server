"use strict";

var passport = require('koa-passport');

var TwitterStrategy = require('passport-twitter').Strategy;
passport.use(new TwitterStrategy({
        consumerKey: "uCshqssRiFHv2dZLhItT59pJd",
        consumerSecret: "f5VZ6ZOPJVViHtBFFrqjkCaPJeZQpeCEutkH8FbouJwvTIgFL3",
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    },
    function(token, tokenSecret, profile, cb){
        let user = profile;
        return done(null, user);
    }
));

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
});

