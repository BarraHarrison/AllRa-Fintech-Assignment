import { StarIcon } from 'lucide-react';

export interface QuoteCardProps {
  id: number;
  quote: string;
  author: string;
  isFavorite: boolean;
  onFavorite: () => void;
}

export function QuoteCard({ id, quote, author, isFavorite, onFavorite }: QuoteCardProps) {
  return (
    <div className="relative p-4 border-b">
      <p className="text-xl italic text-primary">{quote}</p>
      <small className="text-secondary">- {author}</small>
      <button
        className="absolute right-2 top-2"
        onClick={onFavorite}
        aria-label="Favorite this quote"
      >
        <StarIcon
          fill={isFavorite ? '#FFD700' : 'none'} // Filled star if favorite
          stroke={isFavorite ? '#FFD700' : '#ccc'} // Outline for non-favorites
          className="w-6 h-6"
        />
      </button>
    </div>
  );
}
