import React from "react";
import { Star, Package } from "lucide-react";

export const ColumnOne = (): JSX.Element => {
  return (
    <div className="column-one">
      <div className="product-header">
        <h2 className="product-title">Name of Garment</h2>
        <div className="rating">
          <Star className="star-icon filled" />
          <span className="rating-text">4.6 (100) Reviews</span>
        </div>
      </div>

            <div className='customization-section'>
                <div className="product-section">
                    <h3 className="section-title">Color</h3>
                    <div className="color-options">
                        <div className='color-single-option'>
                            <button className="color-swatch" style={{ backgroundColor: "#000" }} aria-label="Black" />
                            <text>Grey</text>
                        </div>
                        <div className='color-single-option'>
                            <button className="color-swatch" style={{ backgroundColor: "#000" }} aria-label="Black" />
                            <text>Grey</text>
                        </div>
                        <div className='color-single-option'>
                            <button className="color-swatch" style={{ backgroundColor: "#000" }} aria-label="Black" />
                            <text>Grey</text>
                        </div>
                        <div className='color-single-option'>
                            <button className="color-swatch" style={{ backgroundColor: "#000" }} aria-label="Black" />
                            <text>Grey</text>
                        </div>
                        <div className='color-single-option'>
                            <button className="color-swatch" style={{ backgroundColor: "#000" }} aria-label="Black" />
                            <text>Grey</text>
                        </div>
                        <div className='color-single-option'>
                            <button className="color-swatch" style={{ backgroundColor: "#000" }} aria-label="Black" />
                            <text>Grey</text>
                        </div>
                    </div>
                </div>

                <div className='section-divider-container'>
                    <div className='section-divider'>
                    </div>
                </div>

                <div className="product-section">
                    <h3 className="section-title">Size</h3>
                    <div className="size-options">
                    <button className="size-button">S</button>
                    <button className="size-button">L</button>
                    <button className="size-button">XS</button>
                    <button className="size-button">M</button>
                    <button className="size-button">XL</button>
                    <button className="size-button">XXL</button>
                    </div>
                </div>
            </div>

      <div className="product-section">
        <h3 className="section-title">Description</h3>
        <p className="description-text">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
          ipsum has been the industry's.Lorem ipsum has been the industry's.Lorem ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="product-section">
        <h3 className="section-title">Shipping</h3>
        <div className="shipping-options">
          <div className="shipping-item">
            <Package className="shipping-icon" />
            <div className="shipping-details">
              <span className="shipping-label">Free Delivery</span>
              <span className="shipping-time">1-2 day</span>
            </div>
          </div>
          <div className="shipping-item">
            <Package className="shipping-icon" />
            <div className="shipping-details">
              <span className="shipping-label">Free Delivery</span>
              <span className="shipping-time">1-2 day</span>
            </div>
          </div>
          <div className="shipping-item">
            <Package className="shipping-icon" />
            <div className="shipping-details">
              <span className="shipping-label">Free Delivery</span>
              <span className="shipping-time">1-2 day</span>
            </div>
          </div>
          <div className="shipping-item">
            <Package className="shipping-icon" />
            <div className="shipping-details">
              <span className="shipping-label">Free Delivery</span>
              <span className="shipping-time">1-2 day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
