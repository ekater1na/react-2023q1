import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from '../../pages/MainPage/MainPage';

describe('MainPage ', () => {
  it('should be shown', () => {
    render(<MainPage />);
    expect(screen.getByText(/characters/i)).toBeTruthy();
  });

  it('should render list of cards', () => {
    render(<MainPage />);
    expect(screen.getByTestId(/main-page/i)).toBeTruthy();
    expect(screen.getAllByTestId('card')).toHaveLength(3);
  });
});
