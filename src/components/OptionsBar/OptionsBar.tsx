import React, { ChangeEvent } from 'react';
import './OptionsBar.scss';

interface OptionsBarProps {
  setSortOrder: (sortOrder: string) => void;
  setResultPerPage: (resultPerPage: number) => void;
  totalCount: number;
}

export const OptionsBar = ({ setSortOrder, setResultPerPage, totalCount }: OptionsBarProps) => {
  const setResult = (e: ChangeEvent<HTMLInputElement>) => {
    setResultPerPage(Number(e.target.value));
  };
  const setSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="options-bar-container" data-testid="options-bar">
      <label>
        Result per page:
        <input type="text" name="name" placeholder="30 max" onChange={setResult} />
      </label>
      <label>
        Sort order:
        <select onChange={setSort}>
          <option value="latest">latest</option>
          <option value="oldest">oldest</option>
          <option value="popular">popular</option>
        </select>
      </label>
      <p>
        Total pages: <span>{totalCount}</span>
      </p>
    </div>
  );
};
