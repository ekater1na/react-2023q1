import React from 'react';
import './FormCard.scss';
import { User } from '../../models/user';

interface FormCardProps {
  user: User;
}

export const FormCard = ({ user }: FormCardProps) => {
  const { firstName, lastName, birthDay, country, sex, photo } = user;

  const img = photo[0] ? URL.createObjectURL(photo[0]) : '';

  return (
    <div className="form-card" data-testid="form-card">
      <img src={img} alt={lastName} />
      <div className="card-content">
        <h2>
          {firstName} {lastName}
        </h2>
        <h3>{birthDay}</h3>
        <p>
          {sex === 'male' ? '👦' : '👧'} &rarr; {country}
        </p>

        <a href="#" className="button">
          Find more
        </a>
      </div>
    </div>
  );
};
