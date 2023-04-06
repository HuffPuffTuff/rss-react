import { renderHook, act } from '@testing-library/react';
import { unsplash } from '../api/unsplash';
import useHttp from './http.hook';

jest.mock('../api/unsplash');

describe('useHttp', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch data successfully', async () => {
    const data = [
      { id: 1, name: 'photo1' },
      { id: 2, name: 'photo2' },
    ];
    const getMock = jest.spyOn(unsplash, 'get').mockResolvedValueOnce({ status: 200, data });

    const { result } = renderHook(() => useHttp());

    const params = { term: 'cat', perPage: 10 };

    await act(async () => {
      const response = await result.current.unsplashRequest('/photos', params);
      expect(getMock).toHaveBeenCalledWith('/photos', {
        params: { query: params.term, per_page: params.perPage },
      });
      expect(response).toEqual(data);
    });
  });

  it('should handle error when fetching data', async () => {
    const res = {
      status: 501,
    };
    const getMock = jest.spyOn(unsplash, 'get').mockRejectedValueOnce(res);

    const { result } = renderHook(() => useHttp());

    const params = { term: 'cat', perPage: 10 };

    await act(async () => {
      const data = await result.current.unsplashRequest('/photos', params);
      expect(getMock).toHaveBeenCalledWith('/photos', {
        params: { query: params.term, per_page: params.perPage },
      });

      expect(data).toBeUndefined;
    });
  });
});
