import React, { useState } from 'react';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import ComicsList from '../../components/comicsList/ComicsList';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string | null>(null);

  const onSearch = (text: string) => {
    setSearchValue(text);
  };

  return (
    <>
      <SearchPanel onSearch={onSearch} />
      <ComicsList searchValue={searchValue} />
    </>
  );
};

export default MainPage;
