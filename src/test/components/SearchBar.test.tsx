import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../../components/SearchBar/SearchBar';

describe('SearchBar', () => {
  it('should be shown', () => {
    render(
      <SearchBar
        searchValue="test"
        setCurrentPage={() => {}}
        setSearchValue={() => {}}
        fetchData={() => {}}
      />
    );
    expect(screen.getByTestId('search-bar')).toBeDefined();
  });
});
