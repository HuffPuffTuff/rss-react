import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: '' };

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchValueChanged: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { actions, reducer } = searchSlice;
export default reducer;
export const { searchValueChanged } = actions;
