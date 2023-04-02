import { ComicAdapter } from 'types/comicsTypes';

export const filterComics = (arr: ComicAdapter[], searchKey: string): ComicAdapter[] => {
  if (arr.length === 0 || searchKey.length === 0) return arr;

  const filteredData = arr.filter((product) => product.title.toLowerCase().includes(searchKey));
  return filteredData;
};
