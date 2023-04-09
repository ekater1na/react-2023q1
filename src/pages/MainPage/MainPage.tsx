import React, { useEffect, useState } from 'react';
import './MainPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { Pagination } from '../../components/Pagination/Pagination';
import { OptionsBar } from '../../components/OptionsBar/OptionsBar';
import { Card } from '../../models/unsplash';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useCards } from '../../hooks/useCard';

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('Search') || 'bali');

  const {
    cards,
    error,
    isLoading,
    currentPage,
    setCurrentPage,
    resultPerPage,
    setResultPerPage,
    setSortOrder,
    totalCount,
  } = useCards(searchValue);

  useEffect(() => {
    localStorage.setItem('Search', searchValue);
  }, [searchValue]);

  const setPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="main-page-wrapper" data-testid="main-page">
      <section>
        <SearchBar
          setCurrentPage={setCurrentPage}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <OptionsBar
          setSortOrder={setSortOrder}
          setResultPerPage={setResultPerPage}
          totalCount={totalCount}
        />

        <div className="message-wrapper">
          {isLoading && <Loader />}
          {error && <Error error={error} />}
          {!cards.length && !isLoading && <p>No data founded</p>}
        </div>

        <div className="cards">
          {!isLoading &&
            cards &&
            cards.map((value: Card) => <CardItem key={value.id} item={value} />)}
        </div>

        <div className="u-center-text u-margin-top-huge">
          {!isLoading && cards && (
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={resultPerPage}
              onPageChange={(currentPage) => setPage(currentPage)}
            />
          )}
        </div>
      </section>
    </div>
  );
};
