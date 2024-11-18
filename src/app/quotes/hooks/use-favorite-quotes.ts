'use client';

import { useState, useEffect } from 'react';

interface Quote {
  id: number;
  quote: string;
  author: string;
}

export const useFavoriteQuotes = () => {
  const [favorites, setFavorites] = useState<Quote[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (quote: Quote) => {
    const isFavorite = favorites.some((fav) => fav.id === quote.id);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.id !== quote.id) // Remove from favorites
      : [...favorites, quote]; // Add to favorites

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return { favorites, toggleFavorite };
};
