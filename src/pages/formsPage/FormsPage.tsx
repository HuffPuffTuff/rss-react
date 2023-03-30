import React, { useState, MouseEvent } from 'react';
import Forms from '../../components/forms/Forms';
import CardList from '../../components/cardList/CardList';
import Modal from '../../components/modal/Modal';
import { IErrors, IFormData } from 'types/formTypes';

import './formsPage.scss';
import { validate } from '../../helpers/helpers';

const FormsPage = () => {
  const [formCards, setFormCards] = useState<IFormData[]>([
    {
      currency: 'USDT',
      date: '2222-02-22',
      fee: 'standart',
      image: 'http://i.annihil.us/u/prod/marvel/i/mg/3/03/64090641911fc.jpg',
      name: 'First',
      price: '0.86',
      visible: true,
    },
  ]);
  const [errors, setErrors] = useState<null | IErrors>(null);
  const [showModal, setShowModal] = useState(false);

  const updateCards = (clearForm: () => void, card: IFormData) => {
    const errors = validate(card);
    if (Object.entries(errors).some(([, value]) => value)) {
      setErrors(errors);
    } else {
      setFormCards([card, ...formCards]);
      clearForm();
      setErrors(null);
      setShowModal(true);
    }
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
      <Forms updateCards={updateCards} errors={errors} />
      <CardList items={formCards} />

      <Modal show={showModal} closeModal={closeModal}>
        <p className="forms__page-message">Your data has been saved!</p>
      </Modal>
    </div>
  );
};

export default FormsPage;
