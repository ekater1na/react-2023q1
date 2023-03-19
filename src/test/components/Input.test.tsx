import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../../components/Input/Input';

describe('Input', () => {
  it('should be shown', () => {
    render(<Input />);

    expect(screen.getByTestId('input')).toBeDefined();
  });
});
