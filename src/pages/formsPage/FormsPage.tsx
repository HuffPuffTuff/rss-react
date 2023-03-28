import React, { useState } from 'react';
import Forms from '../../components/forms/Forms';
import CardList from '../../components/cardList/CardList';
import Modal from '../../components/modal/Modal';
import { IErrors, IFormData } from 'types/formTypes';

import './formsPage.scss';

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
    if (errors.nameErr || errors.dateErr || errors.currencyErr || errors.imageErr) {
      setErrors(errors);
    } else {
      setFormCards([card, ...formCards]);
      clearForm();
      setErrors(null);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="forms__page">
      <Forms updateCards={updateCards} errors={errors} />
      <CardList items={formCards} />

      <Modal show={showModal} closeModal={closeModal}>
        <p className="forms__page-message">Your data has been saved!</p>
      </Modal>
    </div>
  );
};

const validate = (values: IFormData) => {
  const errors: IErrors = {
    nameErr: null,
    dateErr: null,
    currencyErr: null,
    imageErr: null,
    priceErr: null,
  };

  if (!values.name) {
    errors.nameErr = 'Required field!';
  } else if (values.name.length < 5) {
    errors.nameErr = 'Short name, min 5 words';
  }

  if (!values.date) {
    errors.dateErr = 'Required field!';
  } else if (new Date(values.date) < new Date()) {
    errors.dateErr = 'Invalid date, minimum tomorrow!';
  }

  if (!values.currency) {
    errors.currencyErr = 'Required field!';
  }

  if (!values.price) {
    errors.priceErr = 'Required field!';
  } else if (Number(values.price) <= 0) {
    errors.priceErr = 'The price must be greater than 0!';
  }

  if (!values.image) {
    errors.imageErr = 'Required field!';
  }

  return errors;
};

export default FormsPage;
