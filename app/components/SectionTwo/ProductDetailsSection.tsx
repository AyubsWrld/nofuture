import { StarIcon } from "lucide-react";
import React from "react";
import "./styles.css";

const reviewsData = [
  {
    id: 1,
    name: "Grace Carey",
    date: "24 January,2023",
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dumm...",
  },
  {
    id: 2,
    name: "Grace Carey",
    date: "24 January,2023",
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dumm...",
  },
  {
    id: 3,
    name: "Grace Carey",
    date: "24 January,2023",
    rating: 4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dumm...",
  },
];

export const ProductDetailsSection = () => {
  return (
    <section className="product-details-section">
      <div className="product-details-card">
        <div className="product-details-price-content">
          <div className="product-details-price-wrapper">
            <h2 className="product-details-price">$1999.99</h2>
          </div>

          <button className="product-details-button">
            <span className="product-details-button-text">Purchase Now</span>
            <div className="product-details-button-icon">
              <img alt="Arrow icon" />
            </div>
          </button>
        </div>
      </div>

      <div className="product-details-reviews-card">
        <div className="product-details-reviews-content">
          <h3 className="product-details-reviews-title">Reviews</h3>

          {reviewsData.map((review) => (
            <article key={review.id} className="product-details-review">
              <div className="product-details-review-content">
                <div className="product-details-review-inner">
                  <div className="product-details-review-header">
                    <h4 className="product-details-review-name">
                      {review.name}
                    </h4>
                    <time className="product-details-review-date">
                      {review.date}
                    </time>
                  </div>

                  <div className="product-details-review-stars">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className={`product-details-star ${
                          index < review.rating ? "filled" : "empty"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="product-details-review-text">{review.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
