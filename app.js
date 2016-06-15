"use strict";

const
    APORT = 3320,
    Router = require('koa-router'),
    koa = require('koa'),
    app = koa();


function *reqlogger(next){
    console.log('%s - %s %s', new Date().toISOString(), this.req.method, this.req.url);
    yield next;
}
app.use(reqlogger);

app.use(Router(app));

app.get('/', function *(){
    console.log("Express-style example");
    this.body = "This is root page";
});

const publicRouter = new Router();

publicRouter.get('/auth/github', function *(){
    console.log("Middleware-style example");
    this.body = "Authenticate with GitHub OAUTH API (Coming soon)";
});

app.use(publicRouter.middleware());

app.use(function *(){
    this.body = "Hello, world!";
});

app.listen(APORT);
console.log('Listening on port ' + APORT);