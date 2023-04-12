// import React from 'react';
// import { render } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import App from './App';
// import { photoCardsMock } from '../../mocks/mockData';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   Link: jest.fn().mockImplementation(({ children }) => children),
//   NavLink: jest.fn().mockImplementation(({ children }) => children),
// }));

// const mockGetPhotos = jest.fn(async () => {
//   return photoCardsMock;
// });

// jest.mock('../../services/useUnsplashService', () => {
//   return jest.fn(() => ({
//     getPhotos: mockGetPhotos,
//     searchPhotos: mockGetPhotos,
//   }));
// });

// describe('App test', () => {
//   test('Render App component', async () => {
//     const queryByTestId = await act(async () => {
//       const { queryByTestId } = render(<App />);

//       return queryByTestId;
//     });

//     expect(!!queryByTestId('header')).toBe(true);
//   });
// });
