import React from 'react';

interface Props {
  message: string | undefined;
}

const FormError = ({ message }: Props) => {
  return message ? (
    <p className="form__error" role="alert">
      {message}
    </p>
  ) : null;
};

export { FormError };
