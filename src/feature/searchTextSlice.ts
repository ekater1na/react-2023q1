import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchTextState {
  value: string;
}

const initialState: SearchTextState = {
  value: 'madeira',
};

export const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = searchTextSlice.actions;

export default searchTextSlice.reducer;
