"use strict";

const
    APP_PORT = 3000,
    router = require('koa-router')(),
    koa = require('koa'),
    app = koa();


function *reqlogger(next){
    console.log('%s - %s %s', new Date().toISOString(), this.req.method, this.req.url);
    yield next;
}
app
    .use(reqlogger)
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(APP_PORT);

router
    .get('/', function *(){
        this.body = "Welcome to Start Page";
    })
    .get('/auth/github', function *(){
        this.body = "Authenticate with GitHub OAUTH API";
    });

/*
const publicRouter = new Router();

publicRouter.get('/auth/github', function *(){
    console.log("Middleware-style example");
    this.body = "Authenticate with GitHub OAUTH API (Coming soon)";
});

app.use(publicRouter.middleware());

app.use(function *(){
    this.body = "Hello, world!";
});*/
console.log('Listening on port ' + APP_PORT);