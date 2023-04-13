import React from 'react';
import './FormPage.scss';
import { User } from '../../models/user';
import { FormCard } from '../../components/FormCard/FormCard';
import { Form } from '../../components/Form/Form';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const FormPage = () => {
  const formData = useSelector((state: RootState) => state.form);

  return (
    <div className="form-page-wrapper" data-testid="form-page">
      <Form />
      <div className="form-card-content">
        {formData && formData.cards.map((user: User) => <FormCard key={user.id} user={user} />)}
      </div>
    </div>
  );
};
