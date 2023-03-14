import React, { Component } from 'react';
import SearchPanel from '../searchPanel/SearchPanel';
import ComicsList from '../comicsList/ComicsList';

class MainPage extends Component {
  render() {
    return (
      <>
        <SearchPanel />
        <ComicsList />
      </>
    );
  }
}

export default MainPage;
