//mock examples: https://mswjs.io/docs/api/context
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/wai', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'Chao',
      })
    );
  }),
];
