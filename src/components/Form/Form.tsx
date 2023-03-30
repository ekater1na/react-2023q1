import React from 'react';
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
  } = useForm<User>();

  const errorMessage = 'Please add data';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(event);
  };

  const onSubmit = (data: User) => {
    setFormData({ ...data, id: Math.random().toString() });
    console.log(data);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <input
        type="text"
        {...register('firstName', { required: true })}
        placeholder="First name"
        onChange={handleChange}
      />
      {errors.firstName?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <input
        type="text"
        {...register('lastName', { required: true })}
        placeholder="Last name"
        onChange={handleChange}
      />
      {errors.lastName?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <input
        type="date"
        {...register('birthDay', { required: true })}
        placeholder="Birthday"
        onChange={handleChange}
      />
      {errors.birthDay?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <select {...register('country', { required: true })} placeholder="Country">
        {countries.map((item: Country) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <div className="field-row">
        <div className="field-row">
          <input
            type="radio"
            id="sex"
            {...register('sex', { required: true })}
            placeholder="Sex"
            name="sex"
            onChange={handleChange}
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
            onChange={handleChange}
            value="female"
          />
          <label htmlFor="sex">Female</label>
        </div>
      </div>
      {errors.sex?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <input
        type="file"
        {...register('photo', { required: true })}
        placeholder="Photo"
        // onChange={handleChange}
      />
      {errors.photo?.type === 'required' && <p className="error-message">{errorMessage}</p>}

      <div className="field-row">
        <input
          type="checkbox"
          id="agreement"
          {...register('agreement', { required: true })}
          placeholder="agreement"
          onChange={handleChange}
        />
        <label htmlFor="agreement">I consent to my personal data</label>
      </div>
      {errors.agreement?.type === 'required' && <p className="error-message">{errorMessage}</p>}
      <input type="submit" value="Submit" />
    </form>
  );
};