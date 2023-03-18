import React, { Component } from 'react';
import './CardItem.scss';
import { Character } from '../../models/character';

interface ComponentProps {
  item: Character;
}

class CardItem extends Component<ComponentProps> {
  render() {
    const { image, name, species, status, gender, location } = this.props.item;

    return (
      <div className="col-1-of-3">
        <div className="card">
          <div className="card__side card__side--front-3">
            <div className="card__title card__title--3">
              <img className="card__image" src={image} alt={name}></img>
              <h4 className="card__heading">{name}</h4>
            </div>

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
              <a href="#" className="btn btn--white">
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
