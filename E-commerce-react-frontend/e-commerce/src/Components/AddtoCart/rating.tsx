// RatingComponent.tsx
import React from 'react';

interface RatingProps {
  rating: number;
}

const RatingComponent: React.FC<RatingProps> = ({ rating }: RatingProps) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? 'filled' : 'empty'}
        >
          &#9733; {/* Unicode star character */}
        </span>
      ))}
    </div>
  );
};

export default RatingComponent;
