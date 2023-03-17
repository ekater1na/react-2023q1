import React, { ChangeEvent, Component, FormEvent } from 'react';
import './MainPage.scss';

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
        <form role="form" onSubmit={(e: FormEvent<HTMLFormElement>) => this.onFormSubmit(e)}>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              onChange={(e) => this.onFormChange(e)}
              value={this.state.searchValue || ''}
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MainPage;
