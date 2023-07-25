// averageRatingHelper.js
export const calculateAverageRating = (cards) => {
    if (cards.length === 0) {
      return 0;
    }
  
    const totalRatings = cards.reduce((sum, card) => sum + card.rating, 0);
    return totalRatings / cards.length;
  };
  