import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

describe('NotFoundPage', () => {
  test('should be shown', () => {
    render(<NotFoundPage />);

    expect(screen.getByText(/404/i)).toBeDefined();
  });
});
