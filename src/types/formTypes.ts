import { RefObject } from 'react';

export interface IRefs {
  textRef: RefObject<HTMLInputElement>;
  dateRef: RefObject<HTMLInputElement>;
  currencyRef: RefObject<HTMLSelectElement>;
  guarantorRef: RefObject<HTMLInputElement>;
  standartDeliveryRef: RefObject<HTMLInputElement>;
  fastDeliveryRef: RefObject<HTMLInputElement>;
  imageRef: RefObject<HTMLInputElement>;
}

export interface IFormData {
  name: string | undefined;
  date: string | undefined;
  currency: string | undefined;
  guarantor: boolean;
  delivery: string | undefined;
  image: string | null;
}

export interface IErrors {
  nameErr: null | string;
  dateErr: null | string;
  currencyErr: null | string;
  imageErr: null | string;
}
