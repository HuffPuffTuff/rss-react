import { useCallback, useState } from 'react';
import unsplash from '../api/unsplash';

type Process = 'waiting' | 'loading' | 'error';

interface Params {
  term?: string;
  perPage: number;
}

const useHttp = () => {
  const [process, setProcess] = useState<Process>('waiting');

  const unsplashRequest = useCallback(async (url: string, params: Params) => {
    setProcess('loading');

    try {
      const response = await unsplash.get(url, {
        params: { query: params.term, per_page: params.perPage },
      });

      if (response.status !== 200) {
        throw new Error(`Could not fetch , status: ${response.status}`);
      }
      setProcess('waiting');
      return response.data;
    } catch (e) {
      setProcess('error');
    }
  }, []);

  return { unsplashRequest, process };
};

export default useHttp;
