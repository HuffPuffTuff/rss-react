import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header" data-testid="header">
      <h1 className="app__title">
        <Link to="/">React App</Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink end to="/">
              Main Page
            </NavLink>
          </li>
          <li>
            <NavLink end to="/forms">
              Forms
            </NavLink>
          </li>
          <li>
            <NavLink end to="/about-us">
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
