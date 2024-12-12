import React from 'react';

interface AvailabilityProps {
  available: boolean;
}

const Availability: React.FC<AvailabilityProps> = ({ available }) => {
  return (
    <div className={available? 'in-stock' : 'out-of-stock'}>
      {available ? 'In Stock' : 'Out of Stock'}
    </div>
  );
};

export default Availability;


