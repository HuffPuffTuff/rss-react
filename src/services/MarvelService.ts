import IComic from 'types/comicsTypes';

export default class MarvelService {
  private static _baseLink = 'https://gateway.marvel.com:443/v1/public/';
  private static _apiKey = 'apikey=cee96071cc78ddbef9cb57e14b87768c';
  private static _baseOffset = 180;

  private static getResponse = async <T>(url: string): Promise<T> => {
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

  public static getAllComics = async (): Promise<IComic.ComicAdapter[]> => {
    const url = `${this._baseLink}comics?limit=12&offset=${this._baseOffset}&${this._apiKey}`;
    const res = await this.getResponse<IComic.RootObject>(url);
    return res.data.results.map(this._comicAdapter);
  };

  private static _comicAdapter = (comic: IComic.Result): IComic.ComicAdapter => {
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
