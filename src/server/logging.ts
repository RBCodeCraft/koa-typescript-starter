
import * as Koa from 'koa';

export async function logger(ctx: Koa.Context, next: () => Promise<any>) {
  const start = new Date().getMilliseconds();
  await next();
  const ms = new Date().getMilliseconds() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
}
