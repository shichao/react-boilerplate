import * as React from 'react';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { handlers } from '@src/services/mock';
import { rest } from 'msw';

import { Greeting } from './Greeting';

//some preparation
//setup mock service
const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Greeting container test suite', () => {
  it('error message shows properly', async () => {
    //arrange
    //1. mock 500 error
    //https://mswjs.io/docs/api/context/status
    server.use(
      rest.get('/api/wai', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'test error' }));
      })
    );
    //act
    render(<Greeting />);
  });
});
