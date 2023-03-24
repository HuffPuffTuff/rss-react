import React, { Component } from 'react';
import Forms from '../../forms/Forms';
import CardList from '../../cardList/CardList';
import Modal from '../../modal/Modal';
import { IErrors, IFormData } from 'types/formTypes';

import './formsPage.scss';

interface IState {
  formCards: IFormData[];
  errors: IErrors | null;
  showModal: boolean;
}

export default class FormsPage extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      formCards: [
        // {
        //   currency: 'USDT',
        //   date: '2222-02-22',
        //   fee: 'premium',
        //   image: 'blob:http://localhost:5173/1997b2e1-80e1-466c-8e0a-3f61f2717f8f',
        //   name: '12ad2',
        //   price: '0.86',
        //   visible: false,
        // },
        // {
        //   currency: 'USDT',
        //   date: '2222-02-22',
        //   fee: 'premium',
        //   image: 'blob:http://localhost:5173/1997b2e1-80e1-466c-8e0a-3f61f2717f8f',
        //   name: '12ad2',
        //   price: '0.86',
        //   visible: false,
        // },
      ],
      errors: null,
      showModal: false,
    };
  }

  updateCards = (card: IFormData, clearForm: () => void) => {
    const errors = validate(card);
    if (errors.nameErr || errors.dateErr || errors.currencyErr || errors.imageErr) {
      this.setState({ errors });
    } else {
      this.setState(({ formCards }) => {
        return { formCards: [card, ...formCards], errors: null, showModal: true };
      });
      clearForm();
    }
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="forms__page">
        <Forms updateCards={this.updateCards} errors={this.state.errors} />
        <CardList items={this.state.formCards} />

        {this.state.showModal ? (
          <Modal closeModal={this.closeModal}>
            <p className="forms__page-message">Your data has been saved!</p>
          </Modal>
        ) : null}
      </div>
    );
  }
}

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
