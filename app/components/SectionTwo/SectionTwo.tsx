import React, { useState } from 'react';
import './style.css';
import LogoText from '/Two.PNG';

const StarIcon = ({ filled }) => (
  <svg 
    width="18.51" 
    height="17.77" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const colorOptions = [
  { name: "Black", color: "#1b1b1b" },
  { name: "White", color: "#ffffff" },
  { name: "Green", color: "#b0ffca" },
  { name: "Blue", color: "#aab8ff" },
  { name: "Red", color: "#a33d3d" },
  { name: "Grey", color: "#7f7f7f" },
];

const sizeOptions = ["S", "XS", "M", "XL", "XXL"];

const shippingOptions = [
  { title: "Free Delivery", duration: "1-2 day" },
  { title: "Free Delivery", duration: "1-2 day" },
  { title: "Free Delivery", duration: "1-2 day" },
  { title: "Free Delivery", duration: "1-2 day" },
];

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

const ImageGallerySection = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="image-gallery-card">
      <div className="card-content">
        <header className="content-header">
          <h1 className="garment-title">Name of Garment</h1>
          <div className="header-icon"></div>
        </header>

        <div className="rating-container">
          <div className="rating-wrapper">
            <StarIcon filled={true} />
            <span className="rating-value">4.9</span>
            <span className="rating-reviews">(4100) Reviews</span>
          </div>
        </div>

        <div className="color-size-container">
          <section className="color-section">
            <h2 className="section-title">Color</h2>
            <div className="color-options">
              {colorOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(option.name)}
                  className="color-button"
                >
                  <div
                    className={`color-swatch ${selectedColor === option.name ? 'selected' : ''}`}
                    style={{ backgroundColor: option.color }}
                  />
                  <span className="color-name">{option.name}</span>
                </button>
              ))}
            </div>
          </section>

          <div className="divider-container">
            <div className="divider"></div>
          </div>

          <section className="size-section">
            <h2 className="section-title">Size</h2>
            <div className="size-options">
              {sizeOptions.map((size, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                >
                  <span className="size-text">{size}</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        <div className="description-shipping-container">
          <section className="description-section">
            <div className="description-content">
              <h2 className="section-title">Description</h2>
              <p className="description-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's.Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
          </section>

          <div className="shipping-card">
            <div className="shipping-content">
              <h2 className="section-title">Shipping</h2>
            </div>

            <div className="shipping-options-container">
              <div className="shipping-row">
                {shippingOptions.slice(0, 2).map((option, index) => (
                  <div key={index} className="shipping-option">
                    <div className="shipping-icon"></div>
                    <div className="shipping-info">
                      <span className="shipping-title">{option.title}</span>
                      <br />
                      <span className="shipping-duration">{option.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="shipping-row">
                {shippingOptions.slice(2, 4).map((option, index) => (
                  <div key={index} className="shipping-option">
                    <div className="shipping-icon"></div>
                    <div className="shipping-info">
                      <span className="shipping-title">{option.title}</span>
                      <br />
                      <span className="shipping-duration">{option.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductDetailsSection = () => {
  return (
    <section className="product-details-section">
      <div className="price-card">
        <div className="price-content">
          <div className="price-container">
            <h2 className="price">$1999.99</h2>
          </div>

          <button className="purchase-button">
            <span className="purchase-text">Purchase Now</span>
            <div className="purchase-icon-container">
              <div className="purchase-icon">→</div>
            </div>
          </button>
        </div>
      </div>

      <div className="reviews-card">
        <div className="reviews-content">
          <h3 className="reviews-title">Reviews</h3>

          {reviewsData.map((review) => (
            <article key={review.id} className="review-article">
              <div className="review-avatar">
                <div className="avatar-fallback">{review.name.charAt(0)}</div>
              </div>

              <div className="review-body">
                <div className="review-header-container">
                  <div className="review-header">
                    <h4 className="review-name">{review.name}</h4>
                    <time className="review-date">{review.date}</time>
                  </div>

                  <div className="review-stars">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon key={index} filled={index < review.rating} />
                    ))}
                  </div>
                </div>

                <p className="review-text">{review.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function SectionTwo() {
  return (
    <section className="section-two">
      <div className="grid-container">
        {/* Main large image on the left */}
        <div className="main-image">
          <img
            src="/Three.PNG"
            alt="Main product showcase"
          />
        </div>

        {/* Top right side images (2 small images) */}
        <div className="side-images">
          <div className="side-image-top">
            <img
              src={LogoText}
              alt="Product detail 1"
            />
          </div>
          <div className="side-image-middle">
            <img
              src="/Four.PNG"
              alt="Product detail 2"
            />
          </div>
        </div>

        {/* Bottom right image */}
        <div className="bottom-image">
          <img
            src="/Five.PNG"
            alt="Product detail 3"
          />
        </div>
      </div>

      <div className="content-grid">
        <div>
          <ImageGallerySection />
        </div>
        <div>
          <ProductDetailsSection />
        </div>
      </div>
    </section>
  );
}
