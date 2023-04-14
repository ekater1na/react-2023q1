import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  rest.get('https://api.unsplash.com/search/photos?&query=', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated');

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        })
      );
    }

    return res(ctx.json('goa'), ctx.delay(150));
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
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  });

  test('should be shown', () => {
    expect(screen.getByText(/search/i)).toBeTruthy();
  });

  test('should show error', () => {
    expect(screen.getByText(/Request is not defined/i)).toBeTruthy();
  });
});
