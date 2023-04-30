import { PhotoData } from '../../types/unsplashTypes';

export const cardMock: PhotoData = {
  id: 'xyZlawddddds',
  likes: 10,
  alt: 'Title',
  color: '#000000',
  date: 1681243488854,
  urls: {
    small:
      'https://images.unsplash.com/photo-1679679007793-25fa830507c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE2NTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4MDYyNzYwNQ&ixlib=rb-4.0.3&q=80&w=400',
    regular:
      'https://images.unsplash.com/photo-1679679007793-25fa830507c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE2NTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4MDYyNzYwNQ&ixlib=rb-4.0.3&q=80&w=1080',
  },
  user: {
    username: 'huffpuff',
    fullname: 'Vasya Pupkin',
    avatar: {
      small:
        'https://images.unsplash.com/profile-1557251674406-effb9d313841?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
      large:
        'https://images.unsplash.com/profile-1557251674406-effb9d313841?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
    },
    bio: 'Hello world',
    location: 'tbilisi',
    instagram: 'myinstagram',
    twitter: 'mytwitter',
  },
};

export const emptyCardMock: PhotoData = {
  id: 'xyZlawdds',
  likes: 10,
  alt: 'Title',
  color: '#20f150',
  date: 1681243488854,
  urls: {
    small:
      'https://images.unsplash.com/photo-1679679007793-25fa830507c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE2NTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4MDYyNzYwNQ&ixlib=rb-4.0.3&q=80&w=400',
    regular:
      'https://images.unsplash.com/photo-1679679007793-25fa830507c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzE2NTV8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4MDYyNzYwNQ&ixlib=rb-4.0.3&q=80&w=1080',
  },
  user: {
    username: 'qwerty',
    fullname: 'qwerty qwerty',
    avatar: {
      small: '',
      large: '',
    },
    bio: null,
    location: null,
    instagram: null,
    twitter: null,
  },
};

export const cardsMock = [cardMock, emptyCardMock];
