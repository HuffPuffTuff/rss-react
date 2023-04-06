import React, { useEffect, useState } from 'react';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import PhotoList from '../../components/photoList/PhotoList';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    document.title = 'React App';
  }, []);

  const onSearch = (text: string) => {
    setSearchValue(text);
  };

  return (
    <>
      <SearchPanel onSearch={onSearch} />
      <PhotoList searchValue={searchValue} />
    </>
  );
};

export default MainPage;
