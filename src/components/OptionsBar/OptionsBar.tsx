import React, { useState } from 'react';
import './OptionsBar.scss';

export const OptionsBar = () => {
  const [sortOrder, setSortOrder] = useState<string>('');
  const [resultPerPage, setResultPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);

  return (
    <div className="options-bar-container" data-testid="options-bar">
      <label>
        Result per page:
        <input type="text" name="name" />
      </label>
      <label>
        Sort order:
        <select value={sortOrder} onChange={() => setSortOrder(sortOrder)}>
          <option value="grapefruit">Грейпфрут</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select>
      </label>
      <p>
        Total pages: <span>{totalCount}</span>
      </p>
    </div>
  );
};
