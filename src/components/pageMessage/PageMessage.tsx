import React from 'react';

interface Props {
  message: string | undefined;
}

const PageMessage = ({ message }: Props) => {
  return message ? (
    <p className="page-message" role="message" data-testid="no-photos">
      {message}
    </p>
  ) : null;
};

export { PageMessage };
