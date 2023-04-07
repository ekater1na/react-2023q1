import React, { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import './MainPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import { Character } from '../../models/character';
import axios from 'axios';
import { Loader } from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import { OptionsBar } from "../../components/OptionsBar/OptionsBar";

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('Search') || '');

  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('Search', searchValue);
  }, [searchValue]);

  useEffect(() => {
    const getItems = async () => {
      const result = await axios(
        `https://www.anapioficeandfire.com/api/houses` //Endpoint and parameter or base Url
      );
      console.log(result.data);

      setCharacters(result.data); //sets the data to appear
      setLoading(false); //stop loading when data is fetched
    };
    getItems();
  }, []);

  const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 10;

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return data.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  return (
    <div className="main-page-wrapper" data-testid="main-page">
      <section className="section-plans" id="section-plans">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Characters</h2>
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
        <OptionsBar />

        <div className="row">
          {isLoading && <Loader />}

          {characters &&
            characters.map((value: Character) => <CardItem key={value.name} item={value} />)}
        </div>

        <div className="u-center-text u-margin-top-huge">
          {/*<a href="#" className="btn btn--green">*/}
          {/*  Get Started*/}
          {/*</a>*/}
          <Pagination
            currentPage={currentPage}
            totalCount={20}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </div>
  );
};
