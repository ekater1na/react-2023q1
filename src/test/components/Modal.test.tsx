import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from '../../components/Modal/Modal';
import { MockResponse } from '../mockCards';

const mockCard = MockResponse.results[0];
describe('Modal', () => {
  it('should be shown', () => {
    render(<Modal toggle={() => {}} visible={true} item={mockCard} />);
    expect(screen.getByTestId('modal')).toBeDefined();
    expect(screen.getByRole('img')).toBeDefined();
    expect(screen.getByRole('button')).toBeTruthy();
  });
});
