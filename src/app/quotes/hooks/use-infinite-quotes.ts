'use client';

import { useState, useEffect } from 'react';

interface Quote {
  id: number;
  quote: string;
  author: string;
}

export const useInfiniteQuotes = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [page, setPage] = useState(1);

  const fetchQuotes = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/quotes?skip=${(page - 1) * 10}&limit=10`);
      const data = await response.json();
      setQuotes((prev) => [...prev, ...data.quotes]);
    } catch (error) {
      console.error('Failed to fetch quotes:', error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [page]);

  const fetchMoreQuotes = () => {
    setPage((prev) => prev + 1);
  };

  return { quotes, fetchMoreQuotes };
};
