'use client';

import { useFavoriteQuotes } from '@/app/quotes/hooks/use-favorite-quotes';
import { QuoteCard } from '@/app/quotes/components/quote-card';

export default function FavoriteQuotesPage() {
  const { favorites, toggleFavorite } = useFavoriteQuotes();

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold italic text-secondary-foreground">
        My Favorites
      </h1>
      {favorites.length === 0 ? (
        <p>No favorites yet! Start starring your favorite quotes.</p>
      ) : (
        <ul>
          {favorites.map((quote) => (
            <QuoteCard
              key={quote.id}
              id={quote.id}
              quote={quote.quote}
              author={quote.author}
              isFavorite={true}
              onFavorite={() => toggleFavorite(quote)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
