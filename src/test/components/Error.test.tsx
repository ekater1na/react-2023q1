import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from '../../components/Error/Error';

const mockError = { errors: ['OAuth error: The access token is invalid'] };
describe('Error', () => {
  it('should be shown', () => {
    render(<Error error={mockError} />);
    expect(screen.getByTestId('error')).toBeDefined();
  });
});
