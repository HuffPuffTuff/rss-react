import React, { useEffect, useState } from 'react';
import { ComicAdapter } from 'types/comicsTypes';
import MarvelService from '../../services/MarvelService';
import Comic from '../comic/Comic';
import Spinner from '../spinner/Spinner';

import { filterComics } from '../../helpers/helpers';

import './comicsList.scss';

interface IProps {
  searchValue: string;
}

const ComicsList = ({ searchValue }: IProps) => {
  const [comicsList, setComicsList] = useState<ComicAdapter[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const loadComics = async () => {
      const comics = await MarvelService.getAllComics();
      const filteredComics = filterComics(comics, searchValue);
      setLoading(false);
      setComicsList(filteredComics);
    };

    loadComics();
  }, [searchValue]);

  const renderItems = (arr: ComicAdapter[]): JSX.Element => {
    const items = arr.map((item) => {
      return <Comic comic={item} key={item.id} />;
    });

    return <ul className="comics__grid">{items}</ul>;
  };

  const elements = renderItems(comicsList);

  const spinner = loading ? <Spinner /> : null;
  const content = !loading ? elements : null;

  return (
    <div className="comics__list">
      {content}
      {spinner}
    </div>
  );
};

export default ComicsList;
