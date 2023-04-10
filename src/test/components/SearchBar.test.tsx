import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { store } from '../../../store';
import { Provider } from 'react-redux';

describe('SearchBar', () => {
  it('should be shown', () => {
    render(
      <Provider store={store}>
        <SearchBar setCurrentPage={() => {}} fetchData={() => {}} />
      </Provider>
    );
    expect(screen.getByTestId('search-bar')).toBeDefined();
  });
});
