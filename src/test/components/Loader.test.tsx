import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from '../../components/Loader/Loader';

describe('Loader', () => {
  it('should be shown', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader')).toBeDefined();
  });
});
