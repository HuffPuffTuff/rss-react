import React, { Component } from 'react';

import './modal.scss';

interface IProps {
  children: JSX.Element;
  closeModal: () => void;
  show: boolean;
}

export default class Modal extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  handleCloseModal = (e: React.MouseEvent) => {
    const target = e.target;
    const currTarget = e.currentTarget;

    if (target === currTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return this.props.show ? (
      <div className="modal" aria-label="modal" onClick={this.handleCloseModal}>
        {this.props.children}
      </div>
    ) : null;
  }
}
