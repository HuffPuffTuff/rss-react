import gif from './error.gif';
import React from 'react';

const ErrorMessage = () => {
  return (
    <img
      data-testid="error-message"
      style={{
        display: 'block',
        width: '250px',
        height: '250px',
        objectFit: 'contain',
        margin: '0 auto',
      }}
      src={gif}
      alt="error"
    />
  );
};

export default ErrorMessage;
