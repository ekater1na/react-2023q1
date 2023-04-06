import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainPage } from '../../pages/MainPage/MainPage';

describe('MainPage ', () => {
  beforeEach(() => {
    render(<MainPage />);
  });

  test('should be shown', () => {
    expect(screen.getByText(/characters/i)).toBeTruthy();
  });

  test('should render list of cards', () => {
    expect(screen.getByTestId(/main-page/i)).toBeTruthy();
    expect(screen.getAllByTestId('card')).toHaveLength(3);
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
