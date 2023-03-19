import { describe, expect } from 'vitest';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../../components/Input/Input';

describe('Input', () => {
  it('should be shown', () => {
    render(<Input />);
    const input = document.querySelector('input') as HTMLInputElement | null;

    expect(screen.getByTestId('input')).toBeDefined();
    expect(input).toBeTruthy();
    expect(input?.textContent).toBe('');
    if (input) {
      input.textContent = 'jane@doe.com';
      expect(input.textContent).toBe('jane@doe.com');

      expect(input.type).toBe('text');

      fireEvent.change(input, {
        target: {
          value: 'john@doe.com',
        },
      });
      expect(input.value).toBe('john@doe.com');
    }
  });
});
