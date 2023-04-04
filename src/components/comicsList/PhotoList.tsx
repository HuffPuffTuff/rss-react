import React, { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';

import './photoList.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useUnsplashService from '../../services/useUnsplashService';
import { PhotoData } from 'types/unsplashTypes';
import PhotoCard from '../photoCard/PhotoCard';

interface IProps {
  searchValue: string;
}

const PhotoList = ({ searchValue }: IProps) => {
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const { process, getPhotos, searchPhotos } = useUnsplashService();

  useEffect(() => {
    const loadPhotos = async () => {
      if (searchValue.length > 0) {
        setPhotos(await searchPhotos(searchValue));
      } else {
        setPhotos(await getPhotos());
      }
    };

    loadPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  if (process === 'loading') {
    return <Spinner />;
  } else if (process === 'error') {
    return <ErrorMessage />;
  }

  const renderItems = (arr: PhotoData[]): JSX.Element => {
    const items = arr.map((item) => {
      return <PhotoCard photo={item} key={item.id} />;
    });

    return <ul className="photos__grid">{items}</ul>;
  };

  const elements = renderItems(photos);

  return <div className="photos__list">{elements}</div>;
};

export default PhotoList;
