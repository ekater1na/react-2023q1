import { describe, expect, vi } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('should be shown', async () => {
    render(<App />, { wrapper: BrowserRouter });

    expect(screen.getByTestId(/app/i)).toBeTruthy();

    const user = userEvent.setup();
    const about = vi.spyOn(user, 'click');
    const aboutLink = screen.getByText(/about/i);

    await user.click(aboutLink);
    expect(about).toHaveBeenCalledTimes(1);
  });
});
