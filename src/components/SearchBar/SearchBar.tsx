import React, { ChangeEvent, FormEvent } from 'react';
import './SearchBar.scss';
interface SearchBarProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  setCurrentPage: (currentPage: number) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { searchValue, setSearchValue, setCurrentPage } = props;

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchValue(searchValue);
    setCurrentPage(1);
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
