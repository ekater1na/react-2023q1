import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header-wrapper" data-testid="header">
      <nav>
        <ul className="navbar-list">
          <li>
            <NavLink to="/" style={({ isActive }) => (isActive ? { color: 'white' } : {})}>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to="/forms" style={({ isActive }) => (isActive ? { color: 'white' } : {})}>
              Forms
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({ isActive }) => (isActive ? { color: 'white' } : {})}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/404" style={({ isActive }) => (isActive ? { color: 'white' } : {})}>
              404
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
