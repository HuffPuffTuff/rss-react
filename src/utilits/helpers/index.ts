import { PhotoData, Result } from '../../redux/api/unsplashTypes';

export const _photosTransformer = (value: Result): PhotoData => {
  const { id, urls, likes, user, alt_description, color, created_at } = value;
  const dateObj = new Date(created_at);

  return {
    id,
    likes,
    alt: alt_description,
    color,
    date: dateObj.getTime(),
    urls: {
      small: urls.small,
      regular: urls.regular,
    },
    user: {
      username: user.username,
      fullname: user.name,
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

export function getRelativeTimeString(date: number): string {
  const deltaSeconds = Math.round((date - Date.now()) / 1000);
  if (Math.abs(deltaSeconds) > 3600 * 24 * 3) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } else {
    const cutoffs = [60, 3600, 3600 * 24, 3600 * 24 * 7];
    const units: Intl.RelativeTimeFormatUnit[] = ['second', 'minute', 'hour', 'day'];
    const unitIndex = cutoffs.findIndex((cutoff) => cutoff > Math.abs(deltaSeconds));
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    const rtf = new Intl.RelativeTimeFormat('en', {});
    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
  }
}

export function capitalizeStr(str: string | undefined): string | null {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return null;
}
