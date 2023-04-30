import React from 'react';

interface Props {
  message: string;
}

const PageMessage = ({ message }: Props) => {
  return (
    <p className="page-message" role="message" data-testid="no-photos">
      {message}
    </p>
  );
};

export { PageMessage };
