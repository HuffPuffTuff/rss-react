import React, { Component } from 'react';
import { ComicAdapter } from 'types/comicsTypes';
import MarvelService from '../../services/MarvelService';
import Comic from '../comic/Comic';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';

interface IState {
  comicsList: ComicAdapter[];
  loading: boolean;
}

interface IProps {
  searchValue: string | null;
}

export default class ComicsList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      comicsList: [],
      loading: true,
    };
  }

  componentDidMount(): void {
    MarvelService.getAllComics().then(this.onComicsLoaded);
  }

  private filterArr = (arr: ComicAdapter[], filterType: 'props' | 'LS') => {
    if (arr.length === 0) return [];

    const searchKey =
      filterType === 'props'
        ? this.props.searchValue?.toLowerCase() || ''
        : localStorage.getItem('searchValue') || '';

    const filteredData = arr.filter((product) => product.title.toLowerCase().includes(searchKey));
    return filteredData;
  };

  private onComicsLoaded = (data: ComicAdapter[]) => {
    this.setState({ comicsList: data, loading: false });
  };

  private renderItems = (arr: ComicAdapter[]): JSX.Element => {
    const items = arr.map((item) => {
      return <Comic comic={item} key={item.id} />;
    });

    return <ul className="comics__grid">{items}</ul>;
  };

  render(): React.ReactNode {
    const { comicsList, loading } = this.state;

    const filteredData =
      this.props.searchValue === null
        ? this.filterArr(comicsList, 'LS')
        : this.filterArr(comicsList, 'props');

    const elements = this.renderItems(filteredData);

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? elements : null;

    return (
      <div className="comics__list">
        {content}
        {spinner}
      </div>
    );
  }
}
