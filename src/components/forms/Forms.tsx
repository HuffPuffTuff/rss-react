import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { IFormData } from 'types/formTypes';
import UploadFileIcon from '../uploadFileIcon/UploadFileIcon';

import './forms.scss';

const schema = Yup.object().shape({
  name: Yup.string().required('Required field!').min(5, 'Minimum 5 words!'),
  date: Yup.string()
    .required('Required field!')
    .test('Check date', 'Date cannot be in the past, min tomorrow', (value) => {
      if (new Date(value) < new Date()) {
        return false;
      }
      return true;
    }),
  currency: Yup.string().required('Required field!'),
  price: Yup.number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .nullable()
    .required('Required field!'),
  terms: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required(),
  files: Yup.mixed<File[]>().test('Required', 'Required field!', (value) => {
    if (value && value.length > 0) {
      return true;
    }
    return false;
  }),
  delivery: Yup.string(),
});

type FormData = Yup.InferType<typeof schema>;

const Forms = ({ updateCards }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(({ name, date, currency, price, terms, files, delivery }) => {
    if (terms && files && delivery) {
      updateCards({
        name,
        date,
        currency,
        price: price.toString(),
        terms,
        image: URL.createObjectURL(files[0]),
        delivery,
      });
    }
  });

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form__title">Sell NFT form!</h2>
      <div className="form__inner">
        <div className="form__item">
          <label>
            <input {...register('name')} maxLength={15} aria-label="name-input" />
            NFT name*
          </label>
          <p className="form__error">{errors.name?.message}</p>
        </div>

        <div className="form__item">
          <label>
            <input type="date" {...register('date')} aria-label="date-input" />
            End date of sale*
          </label>
          <p className="form__error">{errors.date?.message}</p>
        </div>

        <div className="form__item">
          <label htmlFor="currency">
            <select id="currency" {...register('currency')} aria-label="currency-input">
              <option value="">Choose currency</option>
              <option value="USDT">USDT</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
            Currency
          </label>
          <p className="form__error">{errors.currency?.message}</p>
        </div>

        <div className="form__item">
          <label>
            <input type="number" {...register('price')} step={0.1} aria-label="price-input" />
            Price
          </label>
          <p className="form__error">{errors.price?.message}</p>
        </div>

        <div className="form__item">
          <p>Delivery:</p>
          <label>
            <input type="radio" {...register('delivery')} name="radio" value="worldwide" />
            Worldwide
          </label>
          <label>
            <input
              type="radio"
              {...register('delivery')}
              name="radio"
              value="georgia"
              defaultChecked
            />
            Georgia
          </label>
        </div>

        <div className="upload-file__wrapper">
          <input
            id="upload-file__input_1"
            className="upload-file__input"
            accept="image/*"
            type="file"
            aria-label="image-input"
            {...register('files')}
          />
          <label className="upload-file__label" htmlFor="upload-file__input_1">
            <UploadFileIcon />
            <span className="upload-file__text">Choose image</span>
          </label>
        </div>
        <p className="form__error">{errors.files?.message}</p>
      </div>

      <div className="form__item">
        <label>
          <input type="checkbox" {...register('terms')} />
          Do you agree with the privacy policy?
        </label>
        <p className="form__error">{errors.terms?.message}</p>
      </div>

      <button type="submit">Sumbit</button>
    </form>
  );
};

interface IProps {
  updateCards: (card: IFormData) => void;
}

export default Forms;
