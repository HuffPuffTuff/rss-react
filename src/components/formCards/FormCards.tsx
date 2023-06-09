import React, { MouseEvent, useState } from 'react';
import { PhotoData } from '../../api/unsplashTypes';
import { RootState } from '../../store';

import './formCards.scss';
import PhotoCard from '../photoCard/PhotoCard';
import Modal from '../modal/Modal';
import PhotoCardModal from '../photoCardModal/PhotoCardModal';
import { useSelector } from 'react-redux';

const FormCards = () => {
  const formCards = useSelector((state: RootState) => state.forms.formCards);
  const [photo, setPhoto] = useState<PhotoData | null>(null);

  const onPhotoSelected = (photo: PhotoData) => {
    setPhoto(photo);
  };

  if (formCards.length === 0) {
    return (
      <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px' }}>
        No cards found! Submit your first form!
      </p>
    );
  }

  const closeModal = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const currTarget = e.currentTarget as HTMLDivElement;
    if (target === currTarget) {
      setPhoto(null);
    }
  };

  const renderCards = (arr: PhotoData[]): JSX.Element => {
    const items = arr.map((item) => {
      return <PhotoCard onPhotoSelected={onPhotoSelected} photo={item} key={item.id} />;
    });

    return <ul className="form-cards__grid">{items}</ul>;
  };

  const elements = renderCards(formCards);

  return (
    <>
      <div className="form-cards">
        <h2>My cards</h2>
        {elements}
      </div>
      <Modal show={!!photo} closeModal={closeModal}>
        {photo ? <PhotoCardModal closeModal={closeModal} photo={photo} /> : null}
      </Modal>
    </>
  );
};

export default FormCards;
