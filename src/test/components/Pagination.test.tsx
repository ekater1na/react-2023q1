import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Pagination } from '../../components/Pagination/Pagination';

describe('Pagination', () => {
  it('should be shown', () => {
    render(<Pagination currentPage={1} onPageChange={() => {}} pageSize={1} totalCount={10} />);
    expect(screen.getByTestId('pagination')).toBeDefined();
  });
});
