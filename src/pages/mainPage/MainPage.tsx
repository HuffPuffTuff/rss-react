import React, { useState } from 'react';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import PhotoList from '../../components/comicsList/PhotoList';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

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
