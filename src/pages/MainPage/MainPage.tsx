import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './MainPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import axios, { AxiosResponse } from 'axios';
import { Loader } from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import { OptionsBar } from '../../components/OptionsBar/OptionsBar';
import { Card, ResponseData } from '../../models/unsplash';

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('Search') || '');
  const [sortOrder, setSortOrder] = useState<string>('popular');
  const [resultPerPage, setResultPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [characters, setCharacters] = useState<Card[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('Search', searchValue);
  }, [searchValue]);

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const getItems = async () => {
      const result: AxiosResponse<ResponseData, Card> = await axios.get(
        `https://api.unsplash.com/search/photos?page=${currentPage}&per_page=${resultPerPage}&order_by=${sortOrder}&query=${searchValue}`, //Endpoint and parameter or base Url
        {
          headers: { Authorization: `Client-ID KlL90ddOBBRCiQaPmFVZnF2g_JGrIlhsYWgtgFhMAk0` },
        }
      );
      console.log(result.data);

      setCharacters(result.data.results); //sets the data to appear
      setTotalCount(result.data.total);
      setLoading(false); //stop loading when data is fetched
    };
    getItems();
  };

  const setPage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className="main-page-wrapper" data-testid="main-page">
      <section>
        <div className="u-center-text">
          <form role="form" onSubmit={(e: FormEvent<HTMLFormElement>) => onFormSubmit(e)}>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                onChange={(e) => onFormChange(e)}
                value={searchValue}
              />
              <button className="btn btn--white" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
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
          {characters && characters.map((value: Card) => <CardItem key={value.id} item={value} />)}
        </div>

        <div className="u-center-text u-margin-top-huge">
          <Pagination
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={resultPerPage}
            onPageChange={(currentPage) => setPage(currentPage)}
          />
        </div>
      </section>
    </div>
  );
};
