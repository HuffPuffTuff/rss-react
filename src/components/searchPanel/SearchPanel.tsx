import SearchIcon from '../icons/searchIcon/SearchIcon';
import React, { FormEvent, useEffect, useRef } from 'react';
import './searchPanel.scss';
import useUnsplashService from '../../services/useUnsplashService';

interface IPops {
  onSearch: (text: string) => void;
}

const SearchPanel = ({ onSearch }: IPops) => {
  const storageValue = localStorage.getItem('searchValue') || '';
  const searchRef = useRef<string>(storageValue);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onSearch(searchRef.current);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchRef.current);
    };
  }, []);

  return (
    <form className="search-panel" onSubmit={handleSubmit}>
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
              onChange={({ target }) => (searchRef.current = target.value.toLowerCase())}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchPanel;
