import { StarIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import "./styles.css";

const colorOptions = [
  { name: "Black", color: "color-black" },
  { name: "White", color: "color-white" },
  { name: "Green", color: "color-green" },
  { name: "Blue", color: "color-blue" },
  { name: "Red", color: "color-red" },
  { name: "Grey", color: "color-grey" },
];

const sizeOptions = ["S", "XS", "M", "XL", "XXL"];

const shippingOptions = [
  {
    icon: "https://c.animaapp.com/migntycuZYY379/img/icon-56px-delivery.svg",
    title: "Free Delivery",
    duration: "1-2 day",
  },
  {
    icon: "https://c.animaapp.com/migntycuZYY379/img/icon-56px-delivery.svg",
    title: "Free Delivery",
    duration: "1-2 day",
  },
  {
    icon: "https://c.animaapp.com/migntycuZYY379/img/icon-56px-delivery.svg",
    title: "Free Delivery",
    duration: "1-2 day",
  },
  {
    icon: "https://c.animaapp.com/migntycuZYY379/img/icon-56px-delivery.svg",
    title: "Free Delivery",
    duration: "1-2 day",
  },
];

export const ImageGallerySection = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <Card className="image-gallery-card animate-fade-in">
      <CardContent className="image-gallery-content">
        <header className="image-gallery-header">
          <h1 className="image-gallery-title">Name of Garment</h1>
          <div className="image-gallery-icon-placeholder" />
        </header>

        <div className="image-gallery-rating">
          <div className="image-gallery-rating-inner">
            <StarIcon className="image-gallery-star" />
            <span className="image-gallery-rating-text">4.9</span>
            <span className="image-gallery-rating-reviews">(4100) Reviews</span>
          </div>
        </div>

        <div className="image-gallery-options">
          <section className="image-gallery-section image-gallery-section-left">
            <h2 className="image-gallery-section-title">Color</h2>
            <div className="image-gallery-color-options">
              {colorOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(option.name)}
                  className="image-gallery-color-button"
                >
                  <div
                    className={`image-gallery-color-swatch ${option.color} ${
                      selectedColor === option.name ? "selected" : ""
                    }`}
                  />
                  <span className="image-gallery-color-name">{option.name}</span>
                </button>
              ))}
            </div>
          </section>

          <div className="image-gallery-divider">
            <div className="image-gallery-divider-line" />
          </div>

          <section className="image-gallery-section image-gallery-section-right">
            <h2 className="image-gallery-section-title">Size</h2>
            <div className="image-gallery-size-options">
              {sizeOptions.map((size, index) => (
                <Button
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  variant="ghost"
                  className={`image-gallery-size-button ${
                    selectedSize === size ? "selected" : ""
                  }`}
                >
                  <span className="image-gallery-size-text">{size}</span>
                </Button>
              ))}
            </div>
          </section>
        </div>

        <div className="image-gallery-description-section">
          <section className="image-gallery-description-wrapper">
            <div className="image-gallery-description-content">
              <h2 className="image-gallery-description-title">Description</h2>
              <p className="image-gallery-description-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's.Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
          </section>

          <Card className="image-gallery-shipping-card">
            <CardContent className="image-gallery-shipping-content">
              <h2 className="image-gallery-shipping-title">Shipping</h2>
            </CardContent>

            <div className="image-gallery-shipping-options">
              <div className="image-gallery-shipping-row">
                {shippingOptions.slice(0, 2).map((option, index) => (
                  <div key={index} className="image-gallery-shipping-option">
                    <img
                      className="image-gallery-shipping-icon"
                      alt="Icon delivery"
                    />
                    <div className="image-gallery-shipping-text">
                      <span className="image-gallery-shipping-text-title">
                        {option.title}
                        <br />
                      </span>
                      <span className="image-gallery-shipping-text-duration">
                        {option.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="image-gallery-shipping-row">
                {shippingOptions.slice(2, 4).map((option, index) => (
                  <div key={index} className="image-gallery-shipping-option">
                    <img
                      className="image-gallery-shipping-icon"
                      alt="Icon delivery"
                    />
                    <div className="image-gallery-shipping-text">
                      <span className="image-gallery-shipping-text-title">
                        {option.title}
                        <br />
                      </span>
                      <span className="image-gallery-shipping-text-duration">
                        {option.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};
