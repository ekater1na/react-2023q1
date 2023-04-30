import { AppStore } from '../store/store';
import { imageApi } from '../store/api';

export const preloadData = async (store: AppStore) => {
  store.dispatch(
    imageApi.endpoints.getImages.initiate({
      value: 'madeira',
      currentPage: 1,
      resultPerPage: 20,
      sortOrder: 'popular',
    })
  );
  return await Promise.all(store.dispatch(imageApi.util.getRunningQueriesThunk()));
};
