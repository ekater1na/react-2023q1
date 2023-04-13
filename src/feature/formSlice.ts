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
    storeFormCards: (state, action: PayloadAction<User>) => {
      state.cards.push({
        ...action.payload,
        id: Math.random().toString(),
        photoUrl: URL.createObjectURL(action.payload.photo ? action.payload.photo[0] : new Blob()),
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeFormCards } = formSlice.actions;

export default formSlice.reducer;
