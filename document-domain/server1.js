'use strict';

const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');

let app = new Koa();

// 注册站点静态目录
app.use(serve(path.join(__dirname, 'staticPage1')));

app.listen(3001);

console.log('[demo] staticPage1 is starting at port 3001');