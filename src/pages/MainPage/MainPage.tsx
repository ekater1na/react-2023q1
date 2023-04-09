import React, { useEffect, useState } from 'react';
import './MainPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import axios, { AxiosResponse } from 'axios';
import { Loader } from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import { OptionsBar } from '../../components/OptionsBar/OptionsBar';
import { Card, ResponseData } from '../../models/unsplash';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('Search') || 'bali');
  const [sortOrder, setSortOrder] = useState<string>('popular');
  const [resultPerPage, setResultPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [characters, setCharacters] = useState<Card[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('Search', searchValue);
  }, [searchValue]);

  useEffect(() => {
    setLoading(true);
    const getItems = async () => {
      const result: AxiosResponse<ResponseData, Card> = await axios.get(
        `https://api.unsplash.com/search/photos?page=${currentPage}&per_page=${resultPerPage}&order_by=${sortOrder}&query=${searchValue}`,
        {
          headers: { Authorization: `Client-ID KlL90ddOBBRCiQaPmFVZnF2g_JGrIlhsYWgtgFhMAk0` },
        }
      );

      setCharacters(result.data.results);
      setTotalCount(result.data.total);
      setLoading(false);
    };
    getItems();
  }, [searchValue, currentPage, resultPerPage, sortOrder]);

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
          {!characters.length && !isLoading && <p>No data founded</p>}
        </div>

        <div className="cards">
          {!isLoading &&
            characters &&
            characters.map((value: Card) => <CardItem key={value.id} item={value} />)}
        </div>

        <div className="u-center-text u-margin-top-huge">
          {!isLoading && characters && (
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
