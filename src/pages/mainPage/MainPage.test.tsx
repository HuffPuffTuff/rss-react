// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
// import userEvent from '@testing-library/user-event';

// import MainPage from './MainPage';
// import { photoCardsMock } from '../../mocks/mockData';

// const mockGetPhotos = jest.fn(async () => {
//   return photoCardsMock;
// });

// jest.mock('../../services/useUnsplashService', () => {
//   return jest.fn(() => ({
//     getPhotos: mockGetPhotos,
//     searchPhotos: mockGetPhotos,
//   }));
// });

// describe('Main page test', () => {
//   test('Render MainPage component', async () => {
//     await act(async () => {
//       render(<MainPage />);
//     });

//     expect(!!screen.getByLabelText('input-search')).toBe(true);
//     expect(screen.getAllByTestId('photoCard')).toHaveLength(2);
//   });

//   test('Search photos test', async () => {
//     const user = userEvent.setup();
//     await act(async () => {
//       render(<MainPage />);
//     });

//     const input = screen.getByLabelText('input-search') as HTMLInputElement;
//     await user.type(input, 'pretty cats');

//     await act(async () => {
//       await user.keyboard('{Enter}');
//     });

//     expect(input.value).toEqual('pretty cats');
//   });
// });
