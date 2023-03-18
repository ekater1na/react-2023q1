import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '../../pages/AboutPage/AboutPage';

describe('AboutPage', () => {
  test('should be shown', () => {
    render(<AboutPage />);

    expect(screen.getByText(/About/i)).toBeDefined();
  });
});
