import SearchIcon from '../searchIcon/SearchIcon';
import React, { useEffect, useRef } from 'react';
import './searchPanel.scss';

interface IPops {
  onSearch: (text: string) => void;
}

const SearchPanel = ({ onSearch }: IPops) => {
  const storageValue = localStorage.getItem('searchValue') || '';
  const searchRef = useRef<string>(storageValue);

  const handleSearchChange = (value: string): void => {
    searchRef.current = value.toLowerCase();
    onSearch(value.toLowerCase());
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
              aria-label="input-search"
              defaultValue={searchRef.current}
              onChange={({ target }) => handleSearchChange(target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
