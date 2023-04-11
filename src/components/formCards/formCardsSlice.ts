import { createSlice } from '@reduxjs/toolkit';
import { PhotoData } from '../../types/unsplashTypes';

const initialState: { formCards: PhotoData[] } = {
  formCards: [],
};

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    cardAdded: (state, action) => {
      state.formCards = [action.payload, ...state.formCards];
    },
  },
});

const { actions, reducer } = formCardsSlice;
export default reducer;

export const { cardAdded } = actions;
