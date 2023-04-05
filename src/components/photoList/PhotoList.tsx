import React, { useEffect, useState, MouseEvent } from 'react';
import Spinner from '../spinner/Spinner';

import './photoList.scss';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useUnsplashService from '../../services/useUnsplashService';
import { PhotoData } from 'types/unsplashTypes';
import PhotoCard from '../photoCard/PhotoCard';
import Modal from '../modal/Modal';
import PhotoCardModal from '../photoCardModal/PhotoCardModal';

interface IProps {
  searchValue: string;
}

const PhotoList = ({ searchValue }: IProps) => {
  const [photosList, setPhotosList] = useState<PhotoData[]>([]);
  const [photo, setPhoto] = useState<PhotoData | null>(null);
  const { process, getPhotos, searchPhotos } = useUnsplashService();

  useEffect(() => {
    const loadPhotos = async () => {
      if (searchValue.length > 0) {
        setPhotosList(await searchPhotos(searchValue));
      } else {
        setPhotosList(await getPhotos());
      }
    };

    loadPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

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
  console.log(process);
  if (process === 'loading') {
    return <Spinner />;
  } else if (process === 'error') {
    return <ErrorMessage />;
  }

  if (photosList.length === 0) {
    return (
      <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px' }}>
        Photos not found! Search another word!
      </p>
    );
  }

  const renderItems = (arr: PhotoData[]): JSX.Element => {
    const items = arr.map((item) => {
      return <PhotoCard onPhotoSelected={onPhotoSelected} photo={item} key={item.id} />;
    });

    return <ul className="photos__grid">{items}</ul>;
  };

  const elements = renderItems(photosList);

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
