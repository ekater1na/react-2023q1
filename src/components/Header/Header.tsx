import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header-wrapper">
        <nav>
          <ul className='navbar-list'>
            <li>
              <a href="/">Main</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/404">404</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
