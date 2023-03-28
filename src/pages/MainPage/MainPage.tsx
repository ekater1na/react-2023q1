import React, { ChangeEvent, FormEvent, useState } from 'react';
import './MainPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import characters from '../../consts/characters.json';
import { Character } from '../../models/character';

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('Search') || '');

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="main-page-wrapper" data-testid="main-page">
      <section className="section-plans" id="section-plans">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Characters</h2>
          <form role="form" onSubmit={(e: FormEvent<HTMLFormElement>) => onFormSubmit(e)}>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                onChange={(e) => onFormChange(e)}
                value={searchValue}
              />
              <button className="btn btn--white" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="row">
          {characters &&
            characters.map((value: Character) => <CardItem key={value.id} item={value} />)}
        </div>

        <div className="u-center-text u-margin-top-huge">
          <a href="#" className="btn btn--green">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};
