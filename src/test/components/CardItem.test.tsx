import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardItem } from '../../components/CardItem/CardItem';
import { ResponseData } from '../mockCards';

describe('CardItem', () => {
  const mockItem = ResponseData.results[0];

  it('should be shown', () => {
    render(<CardItem item={mockItem} />);

    expect(screen.getByTestId('card')).toBeDefined();
  });
});
