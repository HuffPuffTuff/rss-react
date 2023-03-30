import UploadFileIcon from '../uploadFileIcon/UploadFileIcon';
import React, { createRef } from 'react';
import { IFormData, IErrors } from 'types/formTypes';
import './forms.scss';

interface IProps {
  updateCards: (clearForm: () => void, card: IFormData) => void;
  errors: IErrors | null;
}

const Forms = ({ updateCards, errors }: IProps) => {
  const textRef = createRef<HTMLInputElement>();
  const dateRef = createRef<HTMLInputElement>();
  const currencyRef = createRef<HTMLSelectElement>();
  const visibleRef = createRef<HTMLInputElement>();
  const standartDeliveryRef = createRef<HTMLInputElement>();
  const fastDeliveryRef = createRef<HTMLInputElement>();
  const imageRef = createRef<HTMLInputElement>();
  const priceRef = createRef<HTMLInputElement>();

  const handleClear = () => {
    textRef.current!.value = '';
    dateRef.current!.value = '';
    currencyRef.current!.value = '';
    priceRef.current!.value = '';
    visibleRef.current!.checked = false;
    fastDeliveryRef.current!.checked = true;
    imageRef.current!.value = '';
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        updateCards(handleClear, {
          name: textRef.current?.value || '',
          date: dateRef.current?.value || '',
          currency: currencyRef.current?.value || '',
          price: priceRef.current?.value || '',
          visible: !!visibleRef.current?.checked,
          fee: standartDeliveryRef.current?.checked
            ? standartDeliveryRef.current.value
            : fastDeliveryRef.current?.checked
            ? fastDeliveryRef.current.value
            : '',

          image:
            imageRef.current?.files && imageRef.current?.files?.length > 0
              ? URL.createObjectURL(imageRef.current.files[0])
              : '',
        });
      }}
    >
      <h2 className="form__title">Sell NFT form!</h2>
      <div className="form__inner">
        <div className="form__item">
          <label>
            <input type="text" ref={textRef} maxLength={15} aria-label="name-input" />
            NFT name
          </label>
          {errors?.nameErr ? <div className="form__error">{errors?.nameErr}</div> : null}
        </div>

        <div className="form__item">
          <label>
            <input type="date" ref={dateRef} aria-label="date-input" />
            End date of sale
          </label>
          {errors?.dateErr ? <div className="form__error">{errors?.dateErr}</div> : null}
        </div>

        <div className="form__item">
          <label htmlFor="currency">
            <select id="currency" ref={currencyRef} aria-label="currency-input">
              <option value="">Choose currency</option>
              <option value="USDT">USDT</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
            Currency
          </label>
          {errors?.currencyErr ? <div className="form__error">{errors?.currencyErr}</div> : null}
        </div>

        <div className="form__item">
          <label>
            <input type="number" ref={priceRef} aria-label="price-input" />
            Price
          </label>
          {errors?.priceErr ? <div className="form__error">{errors?.priceErr}</div> : null}
        </div>

        <div className="form__item">
          <label>
            <input type="checkbox" ref={visibleRef} />
            NFT visible?
          </label>
          <div className="creator-fee">
            <p>Creator fee:</p>
            <label>
              <input ref={standartDeliveryRef} type="radio" name="radio" value="standart" />
              Standart (5%)
            </label>
            <label>
              <input
                ref={fastDeliveryRef}
                type="radio"
                name="radio"
                value="premium"
                defaultChecked
              />
              Premium (10%)
            </label>
          </div>
        </div>

        <div className="upload-file__wrapper">
          <input
            name="files[]"
            id="upload-file__input_1"
            className="upload-file__input"
            accept="image/*"
            type="file"
            ref={imageRef}
            aria-label="image-input"
          />
          <label className="upload-file__label" htmlFor="upload-file__input_1">
            <UploadFileIcon />
            <span className="upload-file__text">Choose image</span>
          </label>
        </div>
        {errors?.imageErr ? <div className="form__error">{errors?.imageErr}</div> : null}
      </div>
      <button type="submit">Sumbit</button>
    </form>
  );
};

export default Forms;
