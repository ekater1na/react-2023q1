import { describe, expect } from 'vitest';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../../components/Form/Form';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

describe('Form', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  });

  test('should be shown', () => {
    expect(screen.getByTestId('form')).toBeDefined();
  });

  test('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByTestId('submit'));

    expect(await screen.findAllByText('Please add data')).toHaveLength(7);
  });

  test('should display matching error when firstName and lastname are invalid', async () => {
    fireEvent.input(screen.getByTestId('first-name'), {
      target: {
        value: 'test first name',
      },
    });

    fireEvent.input(screen.getByTestId('last-name'), {
      target: {
        value: 'test last name',
      },
    });

    fireEvent.submit(screen.getByTestId('submit'));

    expect(await screen.findAllByText('Please add data')).toHaveLength(5);
  });

  test('should display error when some value is valid', async () => {
    fireEvent.input(screen.getByTestId('first-name'), {
      target: {
        value: 'nice firstName',
      },
    });

    fireEvent.input(screen.getByTestId('last-name'), {
      target: {
        value: 'test last name',
      },
    });

    fireEvent.submit(screen.getByTestId('submit'));

    expect(await screen.findAllByText('Please add data')).toHaveLength(5);
  });
});
