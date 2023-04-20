import { Modal, Card, CardModal } from '../';
import React, { useState, MouseEvent } from 'react';
import { PhotoData } from '../../types/unsplashTypes';
import classNames from 'classnames';

interface Props {
  cards: PhotoData[];
  message: string;
  styles: {
    page: string;
  };
}

const Cards = ({ cards, message, styles }: Props) => {
  const [activeCard, setActiveCard] = useState<PhotoData | null>(null);

  const onCardSelected = (photo: PhotoData) => {
    setActiveCard(photo);
  };

  const closeModal = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const currTarget = e.currentTarget as HTMLDivElement;
    if (target === currTarget) {
      setActiveCard(null);
    }
  };

  if (cards.length === 0) {
    return (
      <p
        data-testid="no-photos"
        style={{ textAlign: 'center', marginTop: '30px', fontSize: '30px' }}
      >
        {message}
      </p>
    );
  }

  const renderItems = (arr: PhotoData[]): JSX.Element => {
    const items = arr.map((item) => {
      return <Card onPhotoSelected={onCardSelected} photo={item} key={item.id} />;
    });

    return <ul className={classNames('cards', styles.page)}>{items}</ul>;
  };

  const elements = renderItems(cards);

  return (
    <>
      {elements}
      <Modal show={!!activeCard} closeModal={closeModal}>
        {activeCard ? <CardModal closeModal={closeModal} photo={activeCard} /> : null}
      </Modal>
    </>
  );
};

export { Cards };
