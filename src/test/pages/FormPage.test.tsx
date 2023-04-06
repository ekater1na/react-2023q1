import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormPage } from '../../pages/FormPage/FormPage';

describe('FormPage', () => {
  it('should be shown', () => {
    render(<FormPage />);

    expect(screen.getByTestId(/form-page/i)).toBeTruthy();
  });
});
