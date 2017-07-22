import * as Koa from 'koa';
import { config } from './config';

const app = new Koa();

app.use(async (ctx, next) => {
  const start = new Date().getMilliseconds();
  await next();
  const ms = new Date().getMilliseconds() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use((ctx) => {
  ctx.body = 'Hello World';
});

app.listen(config.port);
console.log(`Server running at http://localhost:${config.port}`);
