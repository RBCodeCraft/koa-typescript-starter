
import * as Router from 'koa-router';

export function registerRoutes(router: Router) {

    router.get('/', async (ctx) => {
        ctx.body = 'Hello World!';
    });

    router.get('/test', async (ctx) => {
        throw new Error('oh no!');
    });

}
