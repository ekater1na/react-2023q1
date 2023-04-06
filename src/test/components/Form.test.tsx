import { describe, expect } from 'vitest';
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../../components/Form/Form';
import { User } from '../../models/user';

describe('Form', () => {
  const mockFormData: User = {
    id: '0',
    firstName: 'string',
    lastName: 'string',
    birthDay: 'string',
    country: 'string',
    sex: 'string',
    photo: {} as FileList,
    agreement: true,
  };

  const setFormData = (value: User) => {
    return value;
  };

  it('should be shown', () => {
    render(<Form setFormData={() => setFormData(mockFormData)} />);

    expect(screen.getByTestId('form')).toBeDefined();
  });

  it('should display required error when value is invalid', async () => {
    render(<Form setFormData={() => setFormData(mockFormData)} />);

    fireEvent.submit(screen.getByTestId('submit'));

    expect(await screen.findAllByText('Please add data')).toHaveLength(7);
  });

  it('should display matching error when firstName and lastname are invalid', async () => {
    render(<Form setFormData={() => setFormData(mockFormData)} />);

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

  it('should display error when some value is valid', async () => {
    render(<Form setFormData={() => setFormData(mockFormData)} />);

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
