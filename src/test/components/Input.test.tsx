import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../../components/Input/Input';

describe('Input', () => {
  test('should be shown', () => {
    render(<Input />);

    expect(screen.getByTestId('input')).toBeDefined();
  });
});
