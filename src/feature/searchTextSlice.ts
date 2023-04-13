import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Card } from '../models/unsplash';

export interface SearchTextState {
  searchValue: string;
  searchResult: Card[];
}

const initialState: SearchTextState = {
  searchValue: 'madeira',
  searchResult: [],
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    storeCard: (state, action: PayloadAction<Card[]>) => {
      state.searchResult = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateSearchValue, storeCard } = searchTextSlice.actions;

export default searchTextSlice.reducer;
