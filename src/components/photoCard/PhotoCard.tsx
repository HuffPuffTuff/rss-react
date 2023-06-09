import React from 'react';

import { PhotoData } from 'api/unsplashTypes';
import Likes from '../icons/likes/Likes';
import avatarIcon from '/avatar.jpg';
import './photoCard.scss';

interface IProps {
  photo: PhotoData;
  onPhotoSelected: (photo: PhotoData) => void;
}

const PhotoCard = ({ photo, onPhotoSelected }: IProps) => {
  const { urls, alt, likes, user } = photo;
  const { avatar, username } = user;

  const handleClick = () => {
    onPhotoSelected(photo);
  };

  return (
    <li data-testid="photoCard" className="photo__item" onClick={handleClick}>
      <div className="photo__item-header">
        <Likes likes={likes} />
        <div className="photo__item-user">
          <span>{username}</span>
          <img width={32} src={avatar.small || avatarIcon} alt="avatar" />
        </div>
      </div>
      <img src={urls.small} className="photo__item-img" alt={alt}></img>
    </li>
  );
};

export default PhotoCard;
