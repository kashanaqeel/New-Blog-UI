import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      <FaStar color={index < rating ? '#ffc107' : '#e4e5e9'} />
    </span>
  ));

  return <div className="rating">{stars}</div>;
};

export default Rating;
