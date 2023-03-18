import React, { ChangeEvent, Component, FormEvent } from 'react';
import './MainPage.scss';
import CardItem from '../../components/CardItem/CardItem';
import characters from '../../consts/characters.json';
import { Character } from '../../models/character';

class MainPage extends Component {
  state = { searchValue: localStorage.getItem('Search' || '') };

  componentWillUnmount() {
    localStorage.setItem('Search', this.state.searchValue ? this.state.searchValue : '');
    console.log('componentWillUnmount');
  }

  onFormChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
  }

  onFormSubmit(e: FormEvent) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="main-page-wrapper">
        <section className="section-plans" id="section-plans">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Characters</h2>
            <form role="form" onSubmit={(e: FormEvent<HTMLFormElement>) => this.onFormSubmit(e)}>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => this.onFormChange(e)}
                  value={this.state.searchValue || ''}
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
  }
}

export default MainPage;
