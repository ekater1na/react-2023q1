import { describe, expect, test } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  test('should be shown', () => {
    render(
      <BrowserRouter>
        <Header />{' '}
      </BrowserRouter>
    );

    expect(screen.getByTestId('header')).toBeDefined();
  });
});
