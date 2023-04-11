import axios, { AxiosError } from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash/debounce';
import { useDispatch } from 'react-redux';
import { storeCard } from '../feature/searchTextSlice';

export const useCards = (value: string) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultPerPage, setResultPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<string>('popular');

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [mount, setMount] = useState(false);

  const dispatch = useDispatch();

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
              dispatch(storeCard(response.data.results));
              setTotalCount(response.data.total_pages);
              setLoading(false);
            });
        } catch (e: unknown) {
          const error = e as AxiosError;
          setLoading(false);
          setError(error.message);
        }
      }, 500),
    [dispatch, currentPage, resultPerPage, sortOrder]
  );

  const fetchData = useCallback(() => {
    fetchCards(value);
  }, [fetchCards, value]);

  useEffect(() => {
    if (!mount) {
      setMount(true);
      fetchData();
    }
  }, [fetchData, mount]);

  return {
    error,
    isLoading,
    currentPage,
    setCurrentPage,
    resultPerPage,
    setResultPerPage,
    setSortOrder,
    totalCount,
    fetchData,
  };
};
