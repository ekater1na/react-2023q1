import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import nodeFetch, { Request, Response } from 'node-fetch';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.fetch = nodeFetch;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.Request = Request;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.Response = Response;

const handlers = [
  rest.get('https://api.unsplash.com/search/photos', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');
    const query = req.url.searchParams.get('query');

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    if (query === 'goa') {
      return res(ctx.json('goa'), ctx.delay(150));
    }
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
describe('MainPage ', () => {
  test('should be shown', async () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText(/search/i)).toBeTruthy();
    });
  });
});
