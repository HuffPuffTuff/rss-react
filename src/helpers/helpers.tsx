import { ComicAdapter } from 'types/comicsTypes';
import { IFormData, IErrors } from 'types/formTypes';

export const filterComics = (arr: ComicAdapter[], searchKey: string): ComicAdapter[] => {
  if (arr.length === 0 || searchKey.length === 0) return arr;

  const filteredData = arr.filter((product) => product.title.toLowerCase().includes(searchKey));
  return filteredData;
};

export const validate = (values: IFormData): IErrors => {
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
    errors.nameErr = 'Short name, min 5 words!';
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
