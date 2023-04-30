import { describe, expect, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

import nodeFetch, { Request, Response } from 'node-fetch';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.fetch = nodeFetch;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.Request = Request;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.Response = Response;

describe('App', () => {
  it('should be shown', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId(/app/i)).toBeTruthy();

    const user = userEvent.setup();
    const about = vi.spyOn(user, 'click');
    const aboutLink = screen.getByText(/about/i);

    await user.click(aboutLink);
    expect(about).toHaveBeenCalledTimes(1);
  });
});
