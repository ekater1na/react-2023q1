import React, { ChangeEvent } from 'react';
import './OptionsBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { updateResultPerPage, updateSortOrder } from '../../feature/searchTextSlice';
import { useGetImageByNameQuery } from '../../store/api';

export const OptionsBar = () => {
  const searchValue = useSelector((state: RootState) => state.searchText.searchValue);

  const { data } = useGetImageByNameQuery(searchValue.value);

  const dispatch = useDispatch();
  const setResult = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateResultPerPage(Number(e.target.value)));
  };
  const setSort = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateSortOrder(e.target.value));
  };

  return (
    <div className="options-bar-container" data-testid="options-bar">
      <label title="According API rules result per page can be no more than 30 items">
        Result per page:
        <input
          className="options-bar-input"
          type="text"
          name="name"
          placeholder="30 max"
          onChange={setResult}
        />
      </label>
      <label>
        Sort order:
        <select className="options-bar-select" onChange={setSort}>
          <option value="latest">latest</option>
          <option value="oldest">oldest</option>
          <option value="popular">popular</option>
        </select>
      </label>
      <p>
        Total pages: <span>{data?.total_pages}</span>
      </p>
    </div>
  );
};
