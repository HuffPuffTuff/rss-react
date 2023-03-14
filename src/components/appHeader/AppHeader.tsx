import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
  const linkStyle = ({ isActive }: { isActive: boolean }) => (isActive ? { color: '#9f0013' } : {});

  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">React App</Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink end style={linkStyle} to="/">
              Main Page
            </NavLink>
          </li>
          <li>
            <NavLink end style={linkStyle} to="/about-us">
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
