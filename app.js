"use strict";

var app = require('koa')();

var session = require('koa-generic-session');
app.keys = ['supersecretkey'];
app.use(session());

var bodyParser = require('koa-bodyparser');
app.use(bodyParser());

require('./auth');
app.use(passport.initialize());
app.use(passport.session());




router
    .get('/', function *(){
        this.body = "Welcome to Start Page";
    })
    .get('/auth/twitter', passport.authenticate('twitter'))
    .get('/auth/twitter/callback',
        passport.authenticate('twitter',{
            successRedirect: '/app',
            failureRedirect: '/'
        })
    );


app.listen(APP_PORT);
console.log('Listening on port ' + APP_PORT);