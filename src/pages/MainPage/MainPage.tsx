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
import { useGetImageByNameQuery } from '../../store/api';

export const MainPage = () => {
  const searchValue = useSelector((state: RootState) => state.searchText.searchValue);
  const cards = useSelector((state: RootState) => state.searchText.searchResult);

  const { currentPage, setCurrentPage, resultPerPage, fetchCards } = useCards(searchValue.value);

  const { data, isLoading, isError, error } = useGetImageByNameQuery(searchValue.value);

  const setPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="main-page-wrapper" data-testid="main-page">
      <section>
        <SearchBar setCurrentPage={setCurrentPage} fetchCards={fetchCards} />
        <OptionsBar />
        <div className="message-wrapper">
          {/*TODO uncomment*/}
          {/*{error && <Error error={error} />}*/}
          {isLoading && <Loader />}
          {!cards.length && !isLoading && !isError && <p>No data found</p>}
        </div>
        <div className="cards">
          {!isLoading &&
            !isError &&
            data?.results.map((value: Card) => <CardItem key={value.id} item={value} />)}
        </div>
        <div className="u-center-text u-margin-top-huge">
          {!isLoading && !isError && cards && (
            <Pagination
              currentPage={currentPage}
              pageSize={resultPerPage}
              onPageChange={(currentPage) => setPage(currentPage)}
            />
          )}
        </div>
      </section>
    </div>
  );
};
