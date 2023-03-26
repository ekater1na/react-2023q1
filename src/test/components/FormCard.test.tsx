import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import FormCard from '../../components/FormCard/FormCard';
import { User } from '../../models/user';

describe('FormCard', () => {
  const mockUser: User = {
    id: '0',
    firstName: 'string',
    lastName: 'string',
    birthDay: 'string',
    country: 'string',
    sex: 'string',
    photo: 'string',
    agreement: true,
  };
  it('should be shown', () => {
    render(<FormCard user={mockUser} />);

    expect(screen.getByTestId('form-card')).toBeDefined();
  });
});
