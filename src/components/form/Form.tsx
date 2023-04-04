import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema, schemaType } from '../../utilits/yupSchema';
import { IFormData } from 'types/formTypes';
import UploadFileIcon from '../icons/uploadFileIcon/UploadFileIcon';
import FormErrorMessage from '../formErrorMessage/FormErrorMessage';
import './form.scss';

interface IProps {
  updateCards: (card: IFormData) => void;
}

const Forms = ({ updateCards }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<schemaType>({
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
      reset();
    }
  });

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2 className="form__title">Sell NFT form!</h2>
      <div className="form__inner">
        <div className="form__item">
          <label>
            <input {...register('name')} maxLength={15} />
            Comic name*
          </label>
          <FormErrorMessage message={errors.name?.message} />
        </div>

        <div className="form__item">
          <label>
            <input type="date" {...register('date')} role="date" />
            End date of sale*
          </label>
          <FormErrorMessage message={errors.date?.message} />
        </div>

        <div className="form__item">
          <label htmlFor="currency">
            <select id="currency" {...register('currency')} role="select">
              <option value="">Choose currency</option>
              <option value="USDT">USDT</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
            Currency
          </label>
          <FormErrorMessage message={errors.currency?.message} />
        </div>

        <div className="form__item">
          <label>
            <input type="number" {...register('price')} step={0.1} />
            Price
          </label>
          <FormErrorMessage message={errors.price?.message} />
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
        <FormErrorMessage message={errors.files?.message} />
      </div>

      <div className="form__item">
        <label>
          <input type="checkbox" {...register('terms')} aria-label="checkbox" />
          Do you agree with the privacy policy?
        </label>

        <FormErrorMessage message={errors.terms?.message} />
      </div>

      <button name="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Forms;
