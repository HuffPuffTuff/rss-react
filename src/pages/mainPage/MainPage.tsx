import React, { useEffect } from 'react';
import { SearchPanel, PhotoList } from '../../components';

const MainPage = () => {
  useEffect(() => {
    document.title = 'React-App Search';
  }, []);

  return (
    <>
      <SearchPanel />
      <PhotoList />
    </>
  );
};

export { MainPage };
