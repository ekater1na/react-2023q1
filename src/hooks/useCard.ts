import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Card } from '../models/unsplash';

export const useCards = (value: string) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultPerPage, setResultPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<string>('popular');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [mount, setMount] = useState(false);

  const fetchCards = useCallback(() => {
    setError('');
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [currentPage, resultPerPage, sortOrder, value]);

  const fetchData = useCallback(() => {
    fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    if (!mount) {
      setMount(true);
      fetchData();
    }
  }, [fetchData, mount]);

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
    fetchData,
  };
};
