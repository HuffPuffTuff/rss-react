import React, { useEffect } from 'react';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import PhotoList from '../../components/photoList/PhotoList';

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

export default MainPage;
