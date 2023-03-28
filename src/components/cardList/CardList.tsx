import React from 'react';
import { IFormData } from 'types/formTypes';

import './cardList.scss';

interface IProps {
  items: IFormData[];
}

const CardList = ({ items }: IProps) => {
  const elements = items.map((card, i) => {
    const { image, name, date, visible, fee, currency, price } = card;

    return (
      <li className="list__item" key={i}>
        <img src={image} alt="" />
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
};

export default CardList;
