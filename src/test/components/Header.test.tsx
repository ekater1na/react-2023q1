import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('should be shown', () => {
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.getByTestId('header')).toBeDefined();
    expect(screen.getByText(/main/i)).toBeTruthy();
  });
});
