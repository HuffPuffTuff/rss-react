import React, { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';

import { cardAdded } from '../formCards/formCardsSlice';
import { schema, schemaType } from '../../utilits/yupSchema';
import UploadFileIcon from '../icons/uploadFileIcon/UploadFileIcon';
import FormErrorMessage from '../formErrorMessage/FormErrorMessage';
import './form.scss';
import { capitalizeStr } from '../../utilits/helpers';
import Modal from '../modal/Modal';

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<schemaType>({
    resolver: yupResolver(schema),
  });
  const [showModal, setShowModal] = useState(false);

  const onSubmit = handleSubmit(
    ({ username, date, location, fullname, files, privacy, twitter, instagram, bio }) => {
      if (files && privacy) {
        const imageUrl = URL.createObjectURL(files[0]);
        const dateObj = new Date(date);

        const newCard = {
          id: uuidv4(),
          likes: 0,
          alt: `${username} photo`,
          color: 'red',
          date: dateObj.getTime(),
          urls: {
            small: imageUrl,
            regular: imageUrl,
          },
          user: {
            username,
            fullname,
            bio: bio || null,
            location: capitalizeStr(location),
            instagram: instagram || null,
            twitter: twitter || null,
            avatar: {
              small: '',
              large: '',
            },
          },
        };

        dispatch(cardAdded(newCard));
        reset();
        setShowModal(true);
      }
    }
  );

  const closeModal = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;
    const currTarget = e.currentTarget as HTMLDivElement;

    if (target === currTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <h2 className="form__title">Create photo card</h2>
        <div className="form__inner">
          <div className="form__item">
            <label>
              <input type="text" {...register('username')} maxLength={12} />
              Username *
            </label>
            <FormErrorMessage message={errors.username?.message} />
          </div>

          <div className="form__item">
            <label>
              <input type="text" {...register('fullname')} maxLength={19} />
              Full Name *
            </label>
            <FormErrorMessage message={errors.fullname?.message} />
          </div>

          <div className="form__item">
            <label>
              <input type="date" {...register('date')} role="date" />
              Date of creation *
            </label>
            <FormErrorMessage message={errors.date?.message} />
          </div>

          <div className="form__item">
            <label>
              <select {...register('location')} role="select">
                <option value="">Choose location</option>
                <option value="georgia">Georgia</option>
                <option value="russia">Russia</option>
                <option value="ukraine">Ukraine</option>
                <option value="belarus">Belarus</option>
                <option value="usa">USA</option>
              </select>
              Location
            </label>
          </div>

          <label>
            <input type="text" {...register('twitter')} maxLength={15} />
            Twitter
          </label>

          <label>
            <input type="text" {...register('instagram')} maxLength={15} />
            Instagram
          </label>

          <label>
            <input type="text" {...register('bio')} maxLength={60} />
            Bio
          </label>

          <div className="form__item">
            <p>Privacy:</p>
            <label>
              <input type="radio" {...register('privacy')} name="radio" value="private" />
              Private
            </label>
            <label>
              <input
                type="radio"
                {...register('privacy')}
                name="radio"
                value="public"
                defaultChecked
              />
              Public
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

          <div className="form__item">
            <label>
              <input type="checkbox" {...register('terms')} aria-label="checkbox" />
              Do you agree with the privacy policy?
            </label>

            <FormErrorMessage message={errors.terms?.message} />
          </div>
        </div>

        <button name="submit" type="submit">
          Submit
        </button>
      </form>

      <Modal show={showModal} closeModal={closeModal}>
        <p data-testid="save-message" className="forms__page-message">
          Your data has been saved!
        </p>
      </Modal>
    </>
  );
};

export default Form;
