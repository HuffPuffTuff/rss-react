import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useSearchPhotosQuery } from '../../redux/api/apiSlice';
import { RootState } from '../../redux/setupStore';
import { SearchPanel, Cards, ErrorMessage, Spinner } from '../../components';

const MainPage = () => {
  const searchValue = useSelector(({ search }: RootState) => search.value);
  const { data: photos = [], isError, isLoading, isFetching } = useSearchPhotosQuery(searchValue);

  const message = '';

  useEffect(() => {
    document.title = 'React-App Search';
  }, []);

  return (
    <>
      <SearchPanel />
      {isError && <ErrorMessage />}
      {isLoading || isFetching ? <Spinner /> : <Cards cards={photos} message={message} />}
    </>
  );
};

export { MainPage };
