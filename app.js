"use strict";

const
    APORT = 3320,
    koa = require('koa'),
    app = koa();


function *reqlogger(next){
    console.log('%s - %s %s', new Date().toISOString(), this.req.method, this.req.url);
    yield next;
}

app.use(reqlogger);

app.use(function *(){
   this.body = "Hello, world!"
});

app.listen(APORT);
console.log('Listening on port ' + APORT);