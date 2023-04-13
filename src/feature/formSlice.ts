import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from '../models/user';

export interface FormState {
  cards: User[];
}

const initialState: FormState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    storeCards: (state, action: PayloadAction<User[]>) => {
      state.cards = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeCards } = formSlice.actions;

export default formSlice.reducer;
