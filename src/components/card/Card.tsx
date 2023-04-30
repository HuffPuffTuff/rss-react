import React from 'react';

import { PhotoData } from 'types/unsplashTypes';
import { Likes } from '../';
import avatarIcon from '/images/avatar.jpg';

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
    <li data-testid="photoCard" className="card" onClick={handleClick}>
      <div className="card__header">
        <Likes likes={likes} />
        <div className="card__user">
          <span>{username}</span>
          <img width={32} src={avatar.small || avatarIcon} alt="avatar" />
        </div>
      </div>
      <img src={urls.small} className="card__img" alt={alt}></img>
    </li>
  );
};

export { Card };
