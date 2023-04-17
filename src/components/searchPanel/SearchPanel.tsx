import SearchIcon from '../icons/searchIcon/SearchIcon';
import React, { FormEvent, useRef } from 'react';
import './searchPanel.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { searchValueChanged } from './searchPanelSlice';

const SearchPanel = () => {
  const searchValue = useSelector(({ search }: RootState) => search.value);
  const searchRef = useRef<string>(searchValue);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(searchValueChanged(searchRef.current));
  };

  return (
    <form aria-label="search-form" className="search-panel" onSubmit={handleSubmit}>
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
