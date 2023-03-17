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

export default class ComicsList extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      comicsList: [],
      loading: true,
    };
  }

  componentDidMount(): void {
    MarvelService.getAllComics().then(this.onComicsLoaded);
  }

  onComicsLoaded = (data: ComicAdapter[]) => {
    this.setState({ comicsList: data, loading: false });
  };

  renderItems = (arr: ComicAdapter[]): JSX.Element => {
    const items = arr.map((item) => {
      return <Comic comic={item} key={item.id} />;
    });

    return <ul className="comics__grid">{items}</ul>;
  };

  render(): React.ReactNode {
    const { comicsList, loading } = this.state;

    const elements = this.renderItems(comicsList);

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
