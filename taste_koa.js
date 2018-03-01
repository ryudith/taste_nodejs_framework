const koa = require('koa');
const app = new koa();

// X-Response-Time
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Response-Time', '${ms}ms');
});

// logger
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log('${ctx.method} ${ctx.url} - ${ms}ms');
});

// response
app.use(async ctx => {
	ctx.body = 'Hello World !';
});

app.listen(3001);