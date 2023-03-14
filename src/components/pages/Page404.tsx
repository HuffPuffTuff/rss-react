import React, { lazy } from 'react';
import { Link } from 'react-router-dom';

// import ErrorMessage from 'components/errorMessage/ErrorMessage';

const ErrorMessage = lazy(() => import('../errorMessage/ErrorMessage'));

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
        Page doesn't exist
      </p>
      <Link
        style={{
          display: 'block',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
          marginTop: '30px',
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
