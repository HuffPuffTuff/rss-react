import { PhotoData, Result } from './../types/unsplashTypes';

export const _photosTransformer = (value: Result): PhotoData => {
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
