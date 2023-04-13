import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormPage } from '../../pages/FormPage/FormPage';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

describe('FormPage', () => {
  it('should be shown', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );

    expect(screen.getByTestId(/form-page/i)).toBeTruthy();
  });
});
