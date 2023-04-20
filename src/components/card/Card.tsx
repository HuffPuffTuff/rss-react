import React from 'react';

import { PhotoData } from 'redux/api/unsplashTypes';
import { Likes } from '../';
import avatarIcon from '/images/avatar.jpg';
import './card.scss';

interface IProps {
  photo: PhotoData;
  onPhotoSelected: (photo: PhotoData) => void;
}

const Card = ({ photo, onPhotoSelected }: IProps) => {
  const { urls, alt, likes, user } = photo;
  const { avatar, username } = user;

  const handleClick = () => {
    onPhotoSelected(photo);
  };

  return (
    <li data-testid="photoCard" className="cards__item" onClick={handleClick}>
      <div className="cards__item-header">
        <Likes likes={likes} />
        <div className="cards__item-user">
          <span>{username}</span>
          <img width={32} src={avatar.small || avatarIcon} alt="avatar" />
        </div>
      </div>
      <img src={urls.small} className="cards__item-img" alt={alt}></img>
    </li>
  );
};

export { Card };
