import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ResponseData } from '../models/unsplash';

export interface SearchTextState {
  searchValue: {
    value: string;
    resultPerPage: number;
    sortOrder: string;
    totalCount: number;
    currentPage: number;
  };
  searchResult: ResponseData;
}

const initialState: SearchTextState = {
  searchValue: {
    value: 'madeira',
    resultPerPage: 20,
    sortOrder: 'popular',
    totalCount: 0,
    currentPage: 1,
  },
  searchResult: {
    results: [],
    total: 0,
    total_pages: 0,
  },
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    updateSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue.value = action.payload;
    },
    updateResultPerPage: (state, action: PayloadAction<number>) => {
      state.searchValue.resultPerPage = action.payload;
    },
    updateSortOrder: (state, action: PayloadAction<string>) => {
      state.searchValue.sortOrder = action.payload;
    },
    updateTotalCount: (state, action: PayloadAction<number>) => {
      state.searchValue.totalCount = action.payload;
    },
    updateCurrentPage: (state, action: PayloadAction<number>) => {
      state.searchValue.currentPage = action.payload;
    },
    storeCard: (state, action: PayloadAction<ResponseData>) => {
      state.searchResult = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateSearchValue,
  updateResultPerPage,
  updateSortOrder,
  updateTotalCount,
  updateCurrentPage,
  storeCard,
} = searchTextSlice.actions;

export default searchTextSlice.reducer;
