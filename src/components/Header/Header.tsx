import React, { Component } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header-wrapper">
        <nav>
          <ul className="navbar-list">
            <li>
              <NavLink to="/" style={({ isActive }) => (isActive ? { color: 'blue' } : {})}>
                Main
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={({ isActive }) => (isActive ? { color: 'blue' } : {})}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/404" style={({ isActive }) => (isActive ? { color: 'blue' } : {})}>
                404
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
