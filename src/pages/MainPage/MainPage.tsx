import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import './MainPage.scss';
import { CardItem } from '../../components/CardItem/CardItem';
import { Character } from '../../models/character';
import axios from 'axios';
import { Loader } from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import { OptionsBar } from '../../components/OptionsBar/OptionsBar';

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('Search') || '');

  const [characters, setCharacters] = useState<Character[]>([]);
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
      const result = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${searchValue}`, //Endpoint and parameter or base Url
        {
          headers: { Authorization: 'Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc' },
        }
      );
      console.log(result.data);

      setCharacters(result.data.results); //sets the data to appear
      setLoading(false); //stop loading when data is fetched
    };
    getItems();
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
        <OptionsBar />

        <div className="cards">
          {isLoading && <Loader />}

          {!characters && !isLoading && <p>No data</p>}

          {characters &&
            characters.map((value: Character) => <CardItem key={value.id} item={value} />)}

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
