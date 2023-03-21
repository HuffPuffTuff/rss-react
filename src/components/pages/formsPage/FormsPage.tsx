import React, { Component } from 'react';
import Forms from '../../forms/Forms';
import { IErrors, IFormData } from 'types/formTypes';

import './formsPage.scss';

interface IState {
  formCards: IFormData[];
  errors: IErrors | null;
}

export default class FormsPage extends Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.state = {
      formCards: [],
      errors: null,
    };
  }

  updateCards = (card: IFormData) => {
    const errors = validate(card);
    if (errors.nameErr || errors.dateErr || errors.currencyErr || errors.imageErr) {
      this.setState({ errors });
    } else {
      this.setState(({ formCards }) => {
        return { formCards: [...formCards, card], errors: null };
      });
    }
  };

  render() {
    return (
      <div className="forms-page">
        <Forms updateCards={this.updateCards} errors={this.state.errors} />
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
  };

  if (!values.name) {
    errors.nameErr = 'Required field';
  } else if (values.name.length < 5) {
    errors.nameErr = 'Short name, min 5 words';
  }

  if (!values.date) {
    errors.dateErr = 'Required field';
  } else if (new Date(values.date) < new Date()) {
    errors.dateErr = 'Invalid date!';
  }

  if (!values.currency) {
    errors.currencyErr = 'Required field';
  }

  if (!values.image) {
    errors.imageErr = 'Required field';
  }

  return errors;
};
