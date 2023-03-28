import React from 'react';
import './CardItem.scss';
import { Character } from '../../models/character';

interface CardItemProps {
  item: Character;
}

export const CardItem = ({ item }: CardItemProps) => {
  const { image, name, species, status, gender, location } = item;

  return (
    <div className="col-1-of-3" data-testid="card">
      <div className="card">
        <div className="card__side card__side--front-3">
          <div className="card__title">
            <img className="card__image" src={image} alt={name}></img>
          </div>
          <h4 className="card__heading truncate">{name}</h4>

          <div className="card__details">
            <ul>
              <li>{species}</li>
              <li>{status}</li>
              <li>{gender}</li>
              <li>{location.name}</li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-3">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Location:</p>
              <p className="card__price-value">{location.name}</p>
            </div>
            <a href="/about" className="btn btn--white">
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
