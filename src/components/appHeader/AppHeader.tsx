import ROUTES from '../../constants/routes';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header" data-testid="header">
      <h1 className="app__title">
        <Link to={ROUTES.MAIN}>React App</Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink end to={ROUTES.MAIN}>
              Search
            </NavLink>
          </li>
          <li>
            <NavLink end to={ROUTES.FORM}>
              Form
            </NavLink>
          </li>
          <li>
            <NavLink end to={ROUTES.ABOUT}>
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { AppHeader };
