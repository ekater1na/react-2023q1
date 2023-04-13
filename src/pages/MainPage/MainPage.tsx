import React from 'react';
import './MainPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { Pagination } from '../../components/Pagination/Pagination';
import { OptionsBar } from '../../components/OptionsBar/OptionsBar';
import { Card } from '../../models/unsplash';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useCards } from '../../hooks/useCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const MainPage = () => {
  const searchValue = useSelector((state: RootState) => state.searchText.searchValue);
  const cards = useSelector((state: RootState) => state.searchText.searchResult);

  const {
    error,
    isLoading,
    currentPage,
    setCurrentPage,
    resultPerPage,
    setResultPerPage,
    setSortOrder,
    totalCount,
    fetchData,
  } = useCards(searchValue);

  const setPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="main-page-wrapper" data-testid="main-page">
      <section>
        <SearchBar setCurrentPage={setCurrentPage} fetchData={fetchData} />
        <OptionsBar
          setSortOrder={setSortOrder}
          setResultPerPage={setResultPerPage}
          totalCount={totalCount}
        />

        {error && <Error error={error} />}
        {cards && !isLoading && (
          <>
            <div className="cards">
              {cards && cards.map((value: Card) => <CardItem key={value.id} item={value} />)}
            </div>

            <div className="u-center-text u-margin-top-huge">
              <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                pageSize={resultPerPage}
                onPageChange={(currentPage) => setPage(currentPage)}
              />
            </div>
          </>
        )}
        {isLoading && <Loader />}
        {!cards.length && !isLoading && (
          <div className="message-wrapper">
            <p>No data</p>
          </div>
        )}
      </section>
    </div>
  );
};
