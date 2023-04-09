import axios, { AxiosError } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { Card } from '../models/unsplash';
import debounce from 'lodash/debounce';

export const useCards = (value: string) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultPerPage, setResultPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<string>('popular');

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCards = useMemo(
    () =>
      debounce((value: string) => {
        try {
          setError('');
          setLoading(true);
          axios
            .get(`https://api.unsplash.com/search/photos?`, {
              headers: { Authorization: 'Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc' },
              params: {
                page: currentPage,
                per_page: isNaN(resultPerPage) ? 10 : resultPerPage,
                order_by: sortOrder,
                query: value,
              },
            })
            .then((response) => {
              setCards(response.data.results);
              setTotalCount(response.data.total_pages);
            });

          setLoading(false);
        } catch (e: unknown) {
          const error = e as AxiosError;
          setLoading(false);
          setError(error.message);
        }
      }, 500),
    [currentPage, resultPerPage, sortOrder]
  );

  useEffect(() => {
    fetchCards(value);
  }, [value, fetchCards]);

  return {
    cards,
    error,
    isLoading,
    currentPage,
    setCurrentPage,
    resultPerPage,
    setResultPerPage,
    setSortOrder,
    totalCount,
  };
};
