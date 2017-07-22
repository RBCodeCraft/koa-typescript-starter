
import * as Router from 'koa-router';

export function registerRoutes(router: Router) {

    router.get('/', async (ctx) => {
        ctx.body = 'Hello World!';
    });

    router.get('/test', async (ctx) => {
        ctx.throw(400 , 'Bad times!', { data: { whosucks: 'you do!' } });
        console.log('got here');
        ctx.body = 'Woo!';
    });

}
