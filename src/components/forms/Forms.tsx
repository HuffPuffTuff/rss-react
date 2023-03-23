import React, { Component, createRef } from 'react';
import { IRefs, IFormData, IErrors } from 'types/formTypes';
import './forms.scss';

interface IProps {
  updateCards: (card: IFormData) => void;
  errors: IErrors | null;
}

export default class Forms extends Component<IProps> {
  formRefs: IRefs;

  constructor(props: IProps) {
    super(props);
    this.formRefs = {
      textRef: createRef(),
      dateRef: createRef(),
      currencyRef: createRef(),
      visibleRef: createRef(),
      standartDeliveryRef: createRef(),
      fastDeliveryRef: createRef(),
      imageRef: createRef(),
      priceRef: createRef(),
    };
  }

  render() {
    const {
      textRef,
      dateRef,
      currencyRef,
      visibleRef,
      standartDeliveryRef,
      fastDeliveryRef,
      imageRef,
      priceRef,
    } = this.formRefs;

    const { errors, updateCards } = this.props;

    console.log('form render');
    return (
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          updateCards({
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
        <div className="form-inner">
          <h2>Sell NFT form!</h2>
          <label>
            <input type="text" ref={textRef} maxLength={15} />
            NFT name
          </label>
          {errors?.nameErr ? <div className="form__error">{errors?.nameErr}</div> : null}
          <label>
            <input type="date" ref={dateRef} />
            End date of sale
          </label>
          {errors?.dateErr ? <div className="form__error">{errors?.dateErr}</div> : null}
          <label htmlFor="currency">
            <select id="currency" ref={currencyRef}>
              <option value="">Choose currency</option>
              <option value="USDT">USDT</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
            Currency
          </label>
          {errors?.currencyErr ? <div className="form__error">{errors?.currencyErr}</div> : null}

          <label>
            <input type="number" ref={priceRef} />
            Price
          </label>

          {errors?.priceErr ? <div className="form__error">{errors?.priceErr}</div> : null}

          <label>
            <input type="checkbox" ref={visibleRef} />
            NFT visivle?
          </label>
          <div>
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
          <div className="upload-file__wrapper">
            <input
              name="files[]"
              id="upload-file__input_1"
              className="upload-file__input"
              accept="image/*"
              type="file"
              ref={imageRef}
            />
            <label className="upload-file__label" htmlFor="upload-file__input_1">
              <svg
                className="upload-file__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z"></path>
              </svg>
              <span className="upload-file__text">Choose image</span>
            </label>
          </div>
          {errors?.imageErr ? <div className="form__error">{errors?.imageErr}</div> : null}
          <button type="submit">Sumbit</button>
        </div>
      </form>
    );
  }
}
