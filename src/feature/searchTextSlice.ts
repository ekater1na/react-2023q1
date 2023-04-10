import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchTextState {
  searchValue: string;
}

const initialState: SearchTextState = {
  searchValue: 'madeira',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = searchTextSlice.actions;

export default searchTextSlice.reducer;
