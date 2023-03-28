import React from 'react';
import './FormCard.scss';
import { User } from '../../models/user';

interface FormCardProps {
  user: User;
}

export const FormCard = ({ user }: FormCardProps) => {
  const { firstName, lastName, birthDay, country, sex, photo } = user;

  return (
    <div className="grid__item" data-testid="form-card">
      <div className="card">
        <img className="card__img" src={photo as string} alt={lastName} />
        <div className="card__content">
          <h1 className="card__header">
            {firstName} {lastName}
          </h1>
          <div className="card__info">
            <p className="card__text">{birthDay}</p>
            <p className="card__text">{country}</p>
            <p className="card__text">{sex === 'male' ? '👦' : '👧'}</p>
          </div>
          <button className="card__btn">
            Follow <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
