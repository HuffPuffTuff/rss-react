import React, { Component } from 'react';
import { IFormData } from 'types/formTypes';

import './cardList.scss';

interface IProps {
  items: IFormData[];
}

export default class FormsList extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const elements = this.props.items.map((card, i) => {
      const { image, name, date, visible, fee, currency, price } = card;
      return (
        <li className="list__item" key={i}>
          {image ? <img src={image} alt="" /> : null}
          <p>{name}</p>
          <p>End date: {date}</p>
          <p>Visible: {visible ? 'Yes' : 'No'}</p>
          <p>Fee: {fee}</p>
          <p>
            Price: {price} {currency}
          </p>
        </li>
      );
    });

    return (
      <div className="cards">
        <ul className="card-list">{elements}</ul>
      </div>
    );
  }
}
