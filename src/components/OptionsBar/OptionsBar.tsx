import React, { ChangeEvent } from 'react';
import './OptionsBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { storeCard, updateResultPerPage, updateSortOrder } from '../../feature/searchTextSlice';
import { useLazyGetImagesQuery } from '../../store/api';

export const OptionsBar = () => {
  const searchValue = useSelector((state: RootState) => state.searchText.searchValue);

  const [trigger, { data }] = useLazyGetImagesQuery();

  const dispatch = useDispatch();
  const setResult = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateResultPerPage(Number(e.target.value)));

    trigger({
      value: searchValue.value,
      currentPage: searchValue.currentPage,
      resultPerPage: searchValue.resultPerPage,
      sortOrder: searchValue.sortOrder,
    });
    dispatch(storeCard(data!));
  };
  const setSort = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateSortOrder(e.target.value));

    trigger({
      value: searchValue.value,
      currentPage: searchValue.currentPage,
      resultPerPage: searchValue.resultPerPage,
      sortOrder: searchValue.sortOrder,
    });
    dispatch(storeCard(data!));
  };

  return (
    <div className="options-bar-container" data-testid="options-bar">
      <label title="According API rules result per page can be no more than 30 items">
        Result per page:
        <input
          className="options-bar-input"
          type="text"
          name="name"
          defaultValue={searchValue.resultPerPage}
          placeholder="30 max"
          onChange={setResult}
        />
      </label>
      <label>
        Sort order:
        <select
          className="options-bar-select"
          onChange={setSort}
          defaultValue={searchValue.sortOrder}
        >
          <option value="latest">latest</option>
          <option value="oldest">oldest</option>
          <option value="popular">popular</option>
        </select>
      </label>
      <p>
        Total pages: <span>{searchValue.totalCount}</span>
      </p>
    </div>
  );
};
