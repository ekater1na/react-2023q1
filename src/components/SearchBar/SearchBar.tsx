import React, { ChangeEvent, FormEvent } from 'react';
import './SearchBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { updateSearchValue } from '../../feature/searchTextSlice';

interface SearchBarProps {
  setCurrentPage?: (currentPage: number) => void;
  fetchCards: (searchValue: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const searchValue = useSelector((state: RootState) => state.searchText.searchValue);
  const dispatch = useDispatch();

  const { fetchCards } = props;

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchValue(e.target.value));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchCards(searchValue.value);
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
