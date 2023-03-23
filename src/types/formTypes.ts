import { RefObject } from 'react';

export interface IRefs {
  textRef: RefObject<HTMLInputElement>;
  dateRef: RefObject<HTMLInputElement>;
  currencyRef: RefObject<HTMLSelectElement>;
  visibleRef: RefObject<HTMLInputElement>;
  standartDeliveryRef: RefObject<HTMLInputElement>;
  fastDeliveryRef: RefObject<HTMLInputElement>;
  imageRef: RefObject<HTMLInputElement>;
  priceRef: RefObject<HTMLInputElement>;
}

export interface IFormData {
  name: string;
  date: string;
  currency: string;
  price: string;
  visible: boolean;
  fee: string;
  image: string;
}

export interface IErrors {
  nameErr: null | string;
  dateErr: null | string;
  currencyErr: null | string;
  imageErr: null | string;
  priceErr: null | string;
}
