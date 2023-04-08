import React, { useState, MouseEvent } from 'react';
import Spinner from '../spinner/Spinner';

import './photoList.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { PhotoData } from 'types/unsplashTypes';
import PhotoCard from '../photoCard/PhotoCard';
import Modal from '../modal/Modal';
import PhotoCardModal from '../photoCardModal/PhotoCardModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useSearchPhotosQuery } from '../../api/apiSlice';

const PhotoList = () => {
  const searchValue = useSelector(({ search }: RootState) => search.value);
  const { data: photos = [], isError, isLoading, isFetching } = useSearchPhotosQuery(searchValue);
  const [photo, setPhoto] = useState<PhotoData | null>(null);

  const onPhotoSelected = (photo: PhotoData) => {
    setPhoto(photo);
  };

  const closeModal = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const currTarget = e.currentTarget as HTMLDivElement;
    if (target === currTarget) {
      setPhoto(null);
    }
  };

  if (isLoading || isFetching) {
    return <Spinner />;
  } else if (isError) {
    return <ErrorMessage />;
  }

  if (photos.length === 0) {
    return (
      <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px' }}>
        No photos found! Enter another query!
      </p>
    );
  }

  const renderItems = (arr: PhotoData[]): JSX.Element => {
    const items = arr.map((item) => {
      return <PhotoCard onPhotoSelected={onPhotoSelected} photo={item} key={item.id} />;
    });

    return <ul className="photos__grid">{items}</ul>;
  };

  const elements = renderItems(photos);

  return (
    <>
      <div className="photos__list">{elements}</div>
      <Modal show={!!photo} closeModal={closeModal}>
        {photo ? <PhotoCardModal closeModal={closeModal} photo={photo} /> : null}
      </Modal>
    </>
  );
};

export default PhotoList;
