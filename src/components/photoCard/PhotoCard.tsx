import Heart from '../icons/heart/Heart';
import React from 'react';
import { PhotoData } from 'types/unsplashTypes';
import './photoCard.scss';

interface IProps {
  photo: PhotoData;
}

const PhotoCard = ({ photo }: IProps) => {
  const { urls, alt, likes, user } = photo;
  const { avatar, username } = user;

  return (
    <li className="photo__item">
      <div className="photo__item-header">
        <div className="photo__item-likes">
          <Heart />
          <span>{likes}</span>
        </div>
        <div className="photo__item-user">
          <img src={avatar.small} alt="avatar" />
          <span>{username}</span>
        </div>
      </div>
      <img src={urls.small} className="photo__item-img" alt={alt}></img>
    </li>
  );
};

export default PhotoCard;
