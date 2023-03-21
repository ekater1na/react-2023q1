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
      <div className="form-card" data-testid="form-card">
        <li className="form-cards_item" id="item_salad">
          <div className="form-card">
            <div className="form-card_price">{country}</div>
            <div className="form-card_image">
              <img src={photo} alt={lastName}></img>
            </div>
            <div className="form-card_content">
              <h2 className="form-card_title">{firstName}</h2>
              <div className="form-card_text">
                <p>{birthDay}</p>
                <p>{sex}</p>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default FormCard;
