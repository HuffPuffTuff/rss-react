import React, { useEffect, useRef } from 'react';
import './searchPanel.scss';

interface IPops {
  onSearch: (text: string) => void;
}

const SearchPanel = ({ onSearch }: IPops) => {
  const searchRef = useRef<string>(localStorage.getItem('searchValue') || '');

  const handleSearchChange = (value: string): void => {
    searchRef.current = value;
    onSearch(value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchRef.current);
    };
  }, []);

  return (
    <div className="search-panel">
      <div className="search-panel__inner">
        <label htmlFor="input-search">Search for everything you want</label>
        <div className="search-panel__container">
          <div className="search-panel__icon">
            <SearchIcon />
          </div>
          <div className="input-container">
            <input
              id="input-search"
              aria-label="search-input"
              value={searchRef.current}
              onChange={({ target }) => handleSearchChange(target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchIcon = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#657789"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
};

export default SearchPanel;
