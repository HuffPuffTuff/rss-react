import React from 'react';
import heart from '/images/heart.svg';

import './likes.scss';

interface Props {
  likes: number;
}

const Likes = ({ likes }: Props) => {
  return (
    <div className="likes-counter">
      <img src={heart} alt="ehart" />
      <span>{likes}</span>
    </div>
  );
};

export { Likes };
