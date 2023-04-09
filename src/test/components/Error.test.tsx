import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from '../../components/Error/Error';

describe('Error', () => {
  it('should be shown', () => {
    render(<Error error="error" />);
    expect(screen.getByTestId('error')).toBeDefined();
  });
});
