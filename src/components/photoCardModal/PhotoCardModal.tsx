import React from 'react';
import { PhotoData } from 'api/unsplashTypes';

import { Likes } from '../';

import close from '/images/close.svg';
import locationIcon from '/images/locations.svg';
import twitterIcon from '/images/twitter.svg';
import instagramIcon from '/images/instagram.svg';
import avatarIcon from '/images/avatar.jpg';
import './photoCardModal.scss';
import { getRelativeTimeString } from '../../utilits/helpers';

interface IProps {
  photo: PhotoData;
  closeModal: (e: React.MouseEvent) => void;
}

const PhotoCardModal = ({ photo, closeModal }: IProps) => {
  const { user, urls, color, alt, likes, date } = photo;
  const { avatar, fullname, bio, location, instagram, twitter } = user;

  return (
    <>
      <div className="card__modal">
        <img
          data-testid={'closeModalIcon'}
          className="close-modal"
          src={close}
          alt="close"
          onClick={closeModal}
        />
        <img className="card__image" data-testid="modal-image" src={urls.regular} alt={alt} />
        <div className="card__info">
          <div className="card__info-header">
            <p>{fullname}</p>
            <img
              width={80}
              style={{ border: `2px solid ${color}` }}
              src={avatar.large || avatarIcon}
              alt="avatar"
            />
          </div>

          <ul className="card__info-list">
            <li>
              <b>Bio:</b> {bio ? bio : <span className="empty-field">{'Not have bio'}</span>}
            </li>
            <li className="list-item">
              <img width={32} src={locationIcon} alt="lcoation icon" />{' '}
              {location ? <b>{location}</b> : <b className="empty-field">{'Not have location'}</b>}
            </li>
            <li className="list-item">
              <img width={32} src={twitterIcon} alt="twitter Icon" />
              {twitter ? (
                <a href={`https://twitter.com/${twitter}`}>{<b>{twitter}</b>}</a>
              ) : (
                <b className="empty-field">{'Not have twitter'}</b>
              )}
            </li>
            <li className="list-item">
              <img width={32} src={instagramIcon} alt="instagram icon" />
              {instagram ? (
                <a href={`https://instagram.com/${instagram}`}>
                  <b>{instagram}</b>
                </a>
              ) : (
                <b className="empty-field">{'Not have instagram'}</b>
              )}
            </li>
          </ul>
          <li className="card__info-footer">
            <Likes likes={likes} />
            <p>{getRelativeTimeString(date)}</p>
          </li>
        </div>
      </div>
    </>
  );
};

export { PhotoCardModal };
