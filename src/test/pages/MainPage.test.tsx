import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from '../../pages/MainPage/MainPage';
import { Provider } from 'react-redux';
import { store } from '../../../store';

describe('MainPage ', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  });

  test('should be shown', () => {
    expect(screen.getByText(/search/i)).toBeTruthy();
  });

  test('should render list of cards', () => {
    expect(screen.getByTestId(/main-page/i)).toBeTruthy();
  });

  test('set localStorage value', () => {
    const setLocalStorage = (id: string, data: object) => {
      window.localStorage.setItem(id, JSON.stringify(data));
    };
    const mockId = '1';
    const mockJson = { data: 'json data' };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });
});
