import React, { useState, MouseEvent } from 'react';
import Forms from '../../components/form/Form';
import CardList from '../../components/cardList/CardList';
import Modal from '../../components/modal/Modal';
import { IFormData } from 'types/formTypes';

import './formsPage.scss';

const FormsPage = () => {
  const [formCards, setFormCards] = useState<IFormData[]>([
    {
      currency: 'USDT',
      date: '2222-02-22',
      delivery: 'worldwide',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/03/64090641911fc.jpg',
      name: 'First',
      price: '0.86',
      terms: true,
    },
  ]);
  const [showModal, setShowModal] = useState(false);

  const updateCards = (card: IFormData) => {
    setFormCards([card, ...formCards]);
    setShowModal(true);
  };

  const closeModal = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const currTarget = e.currentTarget as HTMLDivElement;

    if (target === currTarget) {
      setShowModal(false);
    }
  };

  return (
    <div className="forms__page" data-testid="forms-page-test">
      <Forms updateCards={updateCards} />
      <CardList items={formCards} />

      <Modal show={showModal} closeModal={closeModal}>
        <p className="forms__page-message">Your data has been saved!</p>
      </Modal>
    </div>
  );
};

export default FormsPage;
