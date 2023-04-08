import React from 'react';
import './CardItem.scss';
import { Card } from '../../models/unsplash';

interface CardItemProps {
  item: Card;
}

export const CardItem = ({ item }: CardItemProps) => {
  const { urls, created_at, description, alt_description, likes, user } = item;

  const date = created_at.slice(0, 10);
  return (
    <div className="card" data-testid="card">
      <div className="card__side">
        <div className="card__title">
          <img className="card__image" src={urls.small} alt={alt_description}></img>
        </div>
        <h4 className="card__heading truncate">{description || 'no title'}</h4>

        <div className="card__details truncate">
          <ul>
            <li className="truncate">👍{likes}</li>
            <li className="truncate">📅{date}</li>
            <li className="truncate">👤{user.instagram_username || 'no username'}</li>
            <li className="truncate">🌍{user.location || 'unknown location'}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
