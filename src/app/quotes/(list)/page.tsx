'use client';

import { useInfiniteQuotes } from '@/app/quotes/hooks/use-infinite-quotes';
import { useFavoriteQuotes } from '@/app/quotes/hooks/use-favorite-quotes';
import InfiniteScroll from 'react-infinite-scroll-component';
import { QuoteCard } from '@/app/quotes/components/quote-card';

export default function QuotesPage() {
  const { quotes, fetchMoreQuotes } = useInfiniteQuotes();
  const { favorites, toggleFavorite } = useFavoriteQuotes();

  return (
    <InfiniteScroll
      dataLength={quotes.length}
      next={fetchMoreQuotes}
      hasMore={true} // Set to false if no more quotes
      loader={<h4>Loading...</h4>}
    >
      {quotes.map((quote, index) => (
        <QuoteCard
          key={`${quote.id}-${index}`} // Combine id and index for unique keys
          id={quote.id}
          quote={quote.quote}
          author={quote.author}
          isFavorite={favorites.some((fav) => fav.id === quote.id)}
          onFavorite={() => toggleFavorite(quote)}
        />
      ))}
    </InfiniteScroll>
  );
}
