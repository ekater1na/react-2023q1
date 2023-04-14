import { describe } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from '../../components/Pagination/Pagination';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

describe('Pagination', () => {
  it('should be shown', () => {
    render(
      <Provider store={store}>
        <Pagination onPageChange={() => {}} />
      </Provider>
    );
  });
});
