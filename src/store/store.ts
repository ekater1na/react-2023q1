import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchTextReducer from '../feature/searchTextSlice';
import formReducer from '../feature/formSlice';
import { imageApi } from './api';

const rootReducer = combineReducers({
  [imageApi.reducerPath]: imageApi.reducer,
  searchText: searchTextReducer,
  form: formReducer,
});

export const initStore = (preloadState: RootState | undefined = undefined) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(imageApi.middleware),
    preloadedState: preloadState,
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof initStore;
export type AppStore = ReturnType<typeof initStore>;
