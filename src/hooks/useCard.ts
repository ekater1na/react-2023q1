import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Card, ResponseData } from '../models/unsplash';

export const useCards = (value: string) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [resultPerPage, setResultPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<string>('popular');

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCards = async (value: string) => {
      try {
        setError('');
        setLoading(true);
        const response: AxiosResponse<ResponseData, Card> = await axios.get(
          `https://api.unsplash.com/search/photos?page=${currentPage}&per_page=${resultPerPage}&order_by=${sortOrder}&query=${value}`,
          {
            headers: { Authorization: `Client-ID KlL90ddOBBRCiQaPmFVZnF2g_JGrIlhsYWgtgFhMAk0` },
          }
        );

        setCards(response.data.results);
        setTotalCount(response.data.total_pages);
        setLoading(false);
      } catch (e: unknown) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    };

    fetchCards(value);
  }, [currentPage, resultPerPage, sortOrder, totalCount, value]);

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
