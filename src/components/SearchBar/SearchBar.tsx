import React, { ChangeEvent, FormEvent } from 'react';
import './SearchBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateSearchValue } from '../../feature/searchTextSlice';
import { useLazyGetImageByNameQuery } from '../../store/api';

export const SearchBar = () => {
  const searchValue = useSelector((state: RootState) => state.searchText.searchValue);
  const dispatch = useDispatch();

  const [trigger] = useLazyGetImageByNameQuery();

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchValue(e.target.value));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    trigger(searchValue.value);
  };

  return (
    <div className="u-center-text search-bar-wrapper" data-testid="search-bar">
      <form role="form" onSubmit={(e: FormEvent<HTMLFormElement>) => onFormSubmit(e)}>
        <div className="input-wrapper">
          <input
            className="search-bar-input"
            type="text"
            name="name"
            onChange={(e) => onFormChange(e)}
            value={searchValue.value}
          />
          <button className="search-bar-button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
