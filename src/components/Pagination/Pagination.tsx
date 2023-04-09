import React from 'react';
import './Pagination.scss';
import { DOTS, usePagination } from '../../hooks/usePagination';

interface PaginationProps {
  onPageChange: (currentPage: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}
export const Pagination = (props: PaginationProps) => {
  const { onPageChange, totalCount, currentPage, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (paginationRange) {
    if (currentPage === 0 || paginationRange.length < 2) {
      return null;
    }
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : '';
  return (
    <ul className="pagination-container" data-testid="pagination">
      {/* Left navigation arrow */}
      <li
        className={currentPage === 1 ? 'pagination-item disabled' : 'pagination-item'}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber: string | number, i: number) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber + '' === DOTS) {
            return (
              <li key={i} className="pagination-item dots">
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              key={i}
              className={
                pageNumber === currentPage ? 'pagination-item selected' : 'pagination-item'
              }
              onClick={() => onPageChange(+pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      {/*  Right Navigation arrow */}
      <li
        className={currentPage === lastPage ? 'pagination-item disabled' : 'pagination-item'}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};
