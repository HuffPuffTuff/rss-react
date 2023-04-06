import React from 'react';

interface Props {
  message: string | undefined;
}

const FormErrorMessage = ({ message }: Props) => {
  return message ? (
    <p className="form__error" role="alert">
      {message}
    </p>
  ) : null;
};

export default FormErrorMessage;
