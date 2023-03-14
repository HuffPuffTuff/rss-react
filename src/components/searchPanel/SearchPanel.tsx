import React, { Component } from 'react';
import './searchPanel.scss';

class SearchPanel extends Component {
  state = {
    searchValue: '',
  };

  private onUpdateSearch = (searchValue: string): void => {
    this.setState({ searchValue });
  };

  componentWillUnmount(): void {
    const value = this.state.searchValue;

    localStorage.setItem('searchValue', value);
    console.log('Unmount!');
  }

  render(): JSX.Element {
    const searchValue = localStorage.getItem('searchValue');

    return (
      <div className="search-panel">
        <div className="search-panel__inner">
          <label htmlFor="input-search">Search for everything you want</label>
          <div className="search-panel__container">
            <div className="search-panel__icon">
              <Icon />
            </div>
            <div className="input-container">
              <input
                id="input-search"
                defaultValue={searchValue ? searchValue : ''}
                onChange={({ target }) => this.onUpdateSearch(target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Icon = (): JSX.Element => {
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
