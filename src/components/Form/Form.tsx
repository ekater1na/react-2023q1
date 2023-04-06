import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Form.scss';
import { User } from '../../models/user';
import { countries } from '../../consts/countries';
import { Country } from '../../models/country';

interface FormProps {
  setFormData: (value: User) => void;
}

export const Form = ({ setFormData }: FormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const errorMessage = 'Please add data';
  const successMessage = 'The form has been successfully submitted';

  const [submitMessage, setSubmitMessage] = useState(false);

  const onSubmit = (data: User) => {
    setSubmitMessage(true);
    setFormData({
      ...data,
      id: Math.random().toString(),
      photoUrl: URL.createObjectURL(data.photo ? data.photo[0] : new Blob()),
    });
    setTimeout(reset, 500);
    setTimeout(() => setSubmitMessage(false), 3000);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <input
        type="text"
        {...register('firstName', { required: true })}
        placeholder="First name"
        data-testid="first-name"
      />
      {errors.firstName?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <input
        type="text"
        {...register('lastName', { required: true })}
        placeholder="Last name"
        data-testid="last-name"
      />
      {errors.lastName?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <input
        type="date"
        {...register('birthDay', { required: true })}
        placeholder="Birthday"
        data-testid="birthday"
      />
      {errors.birthDay?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <select {...register('country', { required: true })} placeholder="Country">
        <option value="" defaultValue="">
          Choose country
        </option>
        {countries.map((item: Country) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      {errors.country?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <div className="field-row">
        <div className="field-row">
          <input
            type="radio"
            id="sex"
            {...register('sex', { required: true })}
            placeholder="Sex"
            name="sex"
            value="male"
          />
          <label htmlFor="sex">Male</label>
        </div>

        <div className="field-row">
          <input
            type="radio"
            id="sex"
            {...register('sex', { required: true })}
            placeholder="Sex"
            name="sex"
            value="female"
          />
          <label htmlFor="sex">Female</label>
        </div>
      </div>
      {errors.sex?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <input type="file" {...register('photo', { required: true })} placeholder="Photo" />
      {errors.photo?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <div className="field-row">
        <input
          type="checkbox"
          id="agreement"
          {...register('agreement', { required: true })}
          placeholder="agreement"
          data-testid="agreement"
        />
        <label htmlFor="agreement">I consent to my personal data</label>
      </div>
      {errors.agreement?.type === 'required' && <p className="error-message">{errorMessage}</p>}
      <input type="submit" value="Submit" data-testid="submit" />
      {submitMessage && <h1 className="submit-message">{successMessage}</h1>}
    </form>
  );
};
