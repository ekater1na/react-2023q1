import React, { useState } from 'react';
import './FormPage.scss';
import { User } from '../../models/user';
import FormCard from '../../components/FormCard/FormCard';
import Form from '../../components/Form/Form';

type FormPageState = {
  formData: User[];
};

export const FormPage = () => {
  const [formData, setFormData] = useState<FormPageState>({ formData: [] });

  const addFormData = (data: User) => {
    setFormData({
      formData: [...formData.formData, data],
    });
  };

  return (
    <div className="form-page-wrapper" data-testid="form-page">
      <Form setFormData={addFormData} />
      <div className="form-card-content">
        {formData && formData.formData.map((user: User) => <FormCard key={user.id} user={user} />)}
      </div>
    </div>
  );
};
