'use strict';

const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');

let app = new Koa();

// 注册站点静态目录
app.use(serve(path.join(__dirname, 'staticPage2')));

app.listen(3002);

console.log('[demo] staticPage2 is starting at port 3002')