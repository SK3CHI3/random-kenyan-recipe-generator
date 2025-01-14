import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  ratingCount: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, ratingCount }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {i < fullStars ? (
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
          ) : i === fullStars && hasHalfStar ? (
            <StarHalf className="w-4 h-4 text-yellow-400 fill-current" />
          ) : (
            <Star className="w-4 h-4 text-gray-300" />
          )}
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-600">({ratingCount})</span>
    </div>
  );
};

