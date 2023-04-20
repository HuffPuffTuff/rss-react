import React, { FormEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './searchPanel.scss';

import { SearchIcon } from '../';
import { RootState } from '../../redux/setupStore';
import { searchValueChanged } from '../../redux/slices/searchPanelSlice';

const SearchPanel = () => {
  const searchValue = useSelector(({ search }: RootState) => search.value);
  const searchRef = useRef<string>(searchValue);
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(searchValueChanged(searchRef.current));
  };

  useEffect(() => {
    return () => {
      dispatch(searchValueChanged(searchRef.current));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export { SearchPanel };
