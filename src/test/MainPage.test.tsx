import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from '../pages/MainPage/MainPage';

describe('MainPage ', () => {
  test('should be shown', () => {
    render(<MainPage />);

    expect(screen.getByText(/characters/i)).toBeDefined();
  });
});
