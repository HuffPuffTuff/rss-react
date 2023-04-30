import ROUTES from '../../constants/routes';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="header" data-testid="header">
      <h1 className="header__logo">
        <Link to={ROUTES.MAIN}>React App</Link>
      </h1>
      <nav>
        <ul className="header__menu">
          <li className="header__menu-item">
            <NavLink end to={ROUTES.MAIN}>
              Search
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink end to={ROUTES.FORM}>
              Form
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink end to={ROUTES.ABOUT}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { AppHeader };
