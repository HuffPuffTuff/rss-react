import React, { Component } from 'react';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import ComicsList from '../../components/comicsList/ComicsList';

interface IState {
  searchValue: string | null;
}

class MainPage extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchValue: null,
    };
  }

  private handleSearch = (text: string) => {
    this.setState({ searchValue: text });
  };

  render() {
    return (
      <>
        <SearchPanel onSearch={this.handleSearch} />
        <ComicsList searchValue={this.state.searchValue} />
      </>
    );
  }
}

export default MainPage;
