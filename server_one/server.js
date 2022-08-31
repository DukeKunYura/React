const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const app = new Koa();

app.use(cors());

const currencies = [{ "value": 1, "title": "Российский рубль", "code": "RUR" }];

const router = new Router();

router.get('/currencies', async (ctx, next) => {
    ctx.response.body = currencies;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);