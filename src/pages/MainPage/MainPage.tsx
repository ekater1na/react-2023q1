import React, { useEffect } from 'react';
import './MainPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import { Loader } from '../../components/Loader/Loader';
import { Pagination } from '../../components/Pagination/Pagination';
import { OptionsBar } from '../../components/OptionsBar/OptionsBar';
import { Card } from '../../models/unsplash';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useGetImageByNameQuery } from '../../store/api';
import { storeCard, updateCurrentPage, updateTotalCount } from '../../feature/searchTextSlice';

export const MainPage = () => {
  const searchValue = useSelector((state: RootState) => state.searchText.searchValue);

  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetImageByNameQuery(searchValue.value);

  useEffect(() => {
    if (data) {
      dispatch(storeCard(data));
      dispatch(updateTotalCount(data.total_pages));
    }
  }, [data, dispatch]);

  const setPage = (currentPage: number) => {
    dispatch(updateCurrentPage(currentPage));
  };

  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else {
      // you can access all properties of `SerializedError` here
      return <div>{error.message}</div>;
    }
  }

  return (
    <div className="main-page-wrapper" data-testid="main-page">
      <section>
        <SearchBar />
        <OptionsBar />
        <div className="message-wrapper">
          {isLoading && <Loader />}
          {!data?.results && !isLoading && !error && <p>No data found</p>}
        </div>
        <div className="cards">
          {data?.results.map((value: Card) => (
            <CardItem key={value.id} item={value} />
          ))}
        </div>
        <div className="u-center-text u-margin-top-huge">
          <Pagination onPageChange={(currentPage) => setPage(currentPage)} />
        </div>
      </section>
    </div>
  );
};
