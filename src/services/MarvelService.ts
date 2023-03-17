import { ComicAdapter, RootObject, Result } from 'types/comicsTypes';

import { _baseLink, _apiKey, _baseOffset } from '../components/constants';

export default class MarvelService {
  private static _baseLink = _baseLink;
  private static _apiKey = _apiKey;
  private static _baseOffset = _baseOffset;

  private static getResponseData = async <T>(url: string): Promise<T> => {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      throw error;
    }
  };

  public static getAllComics = async (): Promise<ComicAdapter[]> => {
    const url = `${this._baseLink}comics?limit=9&offset=${this._baseOffset}&${this._apiKey}`;
    const res = await this.getResponseData<RootObject>(url);
    return res.data.results.map(this._comicAdapter);
  };

  private static _comicAdapter = (comic: Result): ComicAdapter => {
    const {
      id,
      title,
      description,
      thumbnail: { path, extension },
      issueNumber,
      pageCount,
      prices,
    } = comic;

    return {
      id,
      title,
      description: description || 'There is no description',
      thumbnail: path + '.' + extension,
      issueNumber,
      pageCount,
      price: prices[0].price,
    };
  };
}
