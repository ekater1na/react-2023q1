import React, { Component } from 'react';
import './FormCard.scss';
import { User } from '../../models/user';

interface FormCardProps {
  user: User;
}

class FormCard extends Component<FormCardProps> {
  render() {
    const { firstName, lastName, birthDay, country, sex, photo } = this.props.user;

    return (
      <div className="grid__item" data-testid="form-card">
        <div className="card">
          <img className="card__img" src={photo} alt={lastName} />
          <div className="card__content">
            <h1 className="card__header">
              {firstName} {lastName}
            </h1>
            <div className="card__info">
              <p className="card__text">{birthDay}</p>
              <p className="card__text">{country}</p>
              <p className="card__text">{sex}</p>
            </div>
            <button className="card__btn">
              Follow <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default FormCard;
