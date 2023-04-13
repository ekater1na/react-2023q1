import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from '../../components/Error/Error';

const mockError = {
  data: {
    errors: ['error'],
  },
  status: 404,
};

describe('Error', () => {
  it('should be shown', () => {
    render(<Error error={mockError} />);
    expect(screen.getByTestId('error')).toBeDefined();
  });
});
