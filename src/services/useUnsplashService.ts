import { SearchData, Result, PhotoData } from 'types/unsplashTypes';
import useHttp from '../hooks/http.hook';

const useUnsplashService = () => {
  const { unsplashRequest, process } = useHttp();
  const perPage = 12;

  const getPhotos = async (): Promise<PhotoData[]> => {
    const result: Result[] = await unsplashRequest('photos', { perPage });
    return result.map(_photosAdapter);
  };

  const searchPhotos = async (term: string): Promise<PhotoData[]> => {
    const result: SearchData = await unsplashRequest('search/photos', { term, perPage });
    return result.results.map(_photosAdapter);
  };

  const _photosAdapter = (value: Result): PhotoData => {
    const { id, urls, likes, user, alt_description, color } = value;

    return {
      id,
      likes,
      alt: alt_description,
      color,
      urls: {
        small: urls.small,
        regular: urls.regular,
      },
      user: {
        username: user.username,
        name: user.name,
        bio: user.bio,
        location: user.location,
        instagram: user.instagram_username,
        twitter: user.twitter_username,
        avatar: {
          large: user.profile_image.large,
          small: user.profile_image.small,
        },
      },
    };
  };

  return { process, getPhotos, searchPhotos };
};

export default useUnsplashService;
