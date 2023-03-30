import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
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
    photo: 'string',
    agreement: true,
  };

  const setFormData = (value: User) => {
    return value;
  };

  it('should be shown', () => {
    render(<Form setFormData={() => setFormData(mockFormData)} />);

    expect(screen.getByTestId('form')).toBeDefined();
  });
});
