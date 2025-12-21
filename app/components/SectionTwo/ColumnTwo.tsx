import React from "react";
import { Star } from "lucide-react";

export const ColumnTwo = (): JSX.Element => {
  const reviews = [
    {
      name: "Grace Carey",
      rating: 4,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's. Lorem ipsum is simply dumm..."
    },
    {
      name: "Grace Carey",
      rating: 4,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's. Lorem ipsum is simply dumm..."
    },
    {
      name: "Grace Carey",
      rating: 4,
      text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's. Lorem ipsum is simply dumm..."
    }
  ];

  return (
    <div className="column-two">
      <div className="price-section">
        <h2 className="price">$1999.99</h2>
        <button className="purchase-button">
          Purchase Now
        </button>
      </div>

      <div className="reviews-section">
        <h3 className="reviews-title">Reviews</h3>
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-header">
                <span className="reviewer-name">{review.name}</span>
              </div>
              <div className="review-rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`review-star ${i < review.rating ? 'filled' : ''}`}
                    size={16}
                  />
                ))}
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
