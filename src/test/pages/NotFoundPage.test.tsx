import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

describe('NotFoundPage', () => {
  it('should be shown', () => {
    render(<NotFoundPage />);

    expect(screen.getByTestId(/not-found-page/i)).toBeTruthy();
    expect(screen.getByText(/404/i)).toBeDefined();
  });
});
