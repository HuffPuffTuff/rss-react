import React, { Component } from 'react';
import { ComicAdapter } from 'types/comicsTypes';
import './comic.scss';

interface IProps {
  comic: ComicAdapter;
}

export default class Comic extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { thumbnail, title, description, issueNumber, pageCount, price } = this.props.comic;
    const descr = description.length < 640 ? description : description.slice(0, 637) + '...';

    return (
      <li className="comics__item">
        <img src={thumbnail} className="comics__item-img" alt="comic image"></img>
        <div className="comics__item-info">
          <p className="comics__item-title">{title}</p>
          <p className="comics__item-price">{price}$</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Issue: {issueNumber}</p>
            <p>Pages: {pageCount}</p>
          </div>
        </div>
        <p className="comics__item-description">{descr}</p>
      </li>
    );
  }
}
