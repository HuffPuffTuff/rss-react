import React, { useEffect, useState } from 'react';
import { ComicAdapter } from 'types/comicsTypes';
import MarvelService from '../../services/MarvelService';
import Comic from '../comic/Comic';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';

interface IProps {
  searchValue: string | null;
}

const ComicsList = ({ searchValue }: IProps) => {
  const [comicsList, setComicsList] = useState<ComicAdapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComics = async () => {
      const comics = await MarvelService.getAllComics();
      setLoading(false);
      const filteredComics =
        searchValue === null ? filterArr(comics, 'LS') : filterArr(comics, 'props');

      setComicsList(filteredComics);
    };

    loadComics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const filterArr = (arr: ComicAdapter[], filterType: 'props' | 'LS') => {
    if (arr.length === 0) return [];

    const searchKey =
      filterType === 'props'
        ? searchValue?.toLowerCase() || ''
        : localStorage.getItem('searchValue') || '';

    const filteredData = arr.filter((product) => product.title.toLowerCase().includes(searchKey));
    return filteredData;
  };

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
