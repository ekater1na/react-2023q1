import React, { ChangeEvent, FormEvent } from 'react';
import './SearchBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { incrementByAmount } from '../../feature/searchTextSlice';
interface SearchBarProps {
  setCurrentPage?: (currentPage: number) => void;
  fetchData: (searchValue: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const searchValue = useSelector((state: RootState) => state.searchText.value);
  const dispatch = useDispatch();

  const { fetchData } = props;

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(incrementByAmount(e.target.value));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchData(searchValue);
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
            value={searchValue}
          />
          <button className="search-bar-button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
