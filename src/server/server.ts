import * as Koa from 'koa';
import * as Router from 'koa-router';

import { config } from './config';
import { logger } from './logging';
import { registerRoutes } from './routes';

const app = new Koa();
const router = new Router();

registerRoutes(router);

app.use(logger);
app.use(router.routes());

app.listen(config.port);
console.log(`Server running at http://localhost:${config.port}`);
