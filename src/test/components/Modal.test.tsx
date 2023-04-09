import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from '../../components/Modal/Modal';

describe('Modal', () => {
  it('should be shown', () => {
    render(<Modal toggle={() => {}} visible={true} />);
    expect(screen.getByTestId('modal')).toBeDefined();
  });
});
