import { configureStore } from '@reduxjs/toolkit';
import searchTextReducer from './src/feature/searchTextSlice';
import formReducer from './src/feature/formSlice';
import { imageApi } from './src/store/api';

export const store = configureStore({
  reducer: {
    [imageApi.reducerPath]: imageApi.reducer,

    searchText: searchTextReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imageApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
