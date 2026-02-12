import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StarIcon = ({ filled }) => (
  <svg
    width="18.51"
    height="17.77"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const colorOptions = [
  { name: 'White', color: '#ffffff' },
  { name: 'Blue', color: '#aab8ff' },
];

const sizeOptions = ['S', 'XS', 'M', 'XL', 'XXL'];

const shippingOptions = [
  { title: 'Free Delivery', duration: '1-2 day' },
  { title: 'Free Delivery', duration: '1-2 day' },
  { title: 'Free Delivery', duration: '1-2 day' },
  { title: 'Free Delivery', duration: '1-2 day' },
];

const reviewsData = [
  {
    id: 1,
    name: 'Grace Carey',
    date: '24 January,2023',
    rating: 4,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s. Lorem Ipsum is simply dumm...',
  },
  {
    id: 2,
    name: 'Grace Carey',
    date: '24 January,2023',
    rating: 4,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s. Lorem Ipsum is simply dumm...',
  },
  {
    id: 3,
    name: 'Grace Carey',
    date: '24 January,2023',
    rating: 4,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s. Lorem Ipsum is simply dumm...',
  },
];

const ImageGallerySection = ({ isMobile, theme = 'dark' }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        maxWidth: '638px',
        padding: isMobile ? '1.5rem' : '2rem',
        background: isDark ? '#141414' : '#ffffff',
        borderRadius: isMobile ? '24px' : '32px',
        border: `1px solid ${isDark ? 'rgb(38, 38, 38)' : 'rgb(226, 226, 226)'}`,
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <h1
            style={{
              marginTop: '-1px',
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontWeight: 600,
              color: isDark ? 'white' : '#0f0f0f',
              fontSize: isMobile ? '28px' : '46px',
              textAlign: 'center',
              letterSpacing: '-0.3px',
              lineHeight: isMobile ? '32px' : '46px',
              whiteSpace: isMobile ? 'normal' : 'nowrap',
            }}
          >
            Dragonite Slab
          </h1>
          <div
            style={{
              width: isMobile ? '36px' : '46px',
              height: isMobile ? '36px' : '46px',
              background: isDark ? '#1b1b1b' : '#f0f0f0',
              borderRadius: '999px',
              border: `1px solid ${isDark ? 'rgb(38, 38, 38)' : 'rgb(226, 226, 226)'}`,
            }}
          />
        </header>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            width: '100%',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.125rem' }}>
            <div style={{ color: '#FFB547' }}>
              <StarIcon filled={true} />
            </div>
            <span
              style={{
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 500,
                color: isDark ? 'white' : '#111111',
                fontSize: '15px',
                textAlign: 'center',
                lineHeight: '1rem',
                whiteSpace: 'nowrap',
              }}
            >
              4.9
            </span>
            <span
              style={{
                opacity: 0.6,
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 500,
                color: isDark ? 'white' : '#555555',
                fontSize: '15px',
                textAlign: 'center',
                lineHeight: '1rem',
                whiteSpace: 'nowrap',
              }}
            >
              (4100) Reviews
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: isMobile ? '1.5rem 0.75rem 1.5rem 0' : '2rem 0.75rem 2rem 0',
              flex: 1,
            }}
          >
            <h2
              style={{
                marginTop: '-1px',
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 600,
                color: isDark ? 'white' : '#111111',
                fontSize: '16px',
                textAlign: 'center',
                letterSpacing: '-0.3px',
                lineHeight: '1rem',
                whiteSpace: 'nowrap',
              }}
            >
              Color
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.5rem',
                width: '100%',
              }}
            >
              {colorOptions.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => setSelectedColor(option.name)}
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '64px',
                    border: `1px solid ${isDark ? 'rgb(38, 38, 38)' : 'rgb(200, 200, 200)'}`,
                    transition: 'all 0.2s',
                    backgroundColor: option.color,
                    boxShadow: selectedColor === option.name ? (isDark ? '0 0 0 2px white' : '0 0 0 2px #000000') : 'none',
                  }}
                >
                  <span
                    style={{
                      opacity: 0.6,
                      fontFamily: "'Inter', Helvetica, sans-serif",
                      fontWeight: 400,
                      color: isDark ? 'white' : '#333333',
                      fontSize: '12px',
                      textAlign: 'center',
                      letterSpacing: '-0.3px',
                      lineHeight: '0.75rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                                         
                  </span>
                </button>
              ))}
            </div>
          </section>
          <div
            style={{
              display: 'flex',
              width: '0.625rem',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.625rem',
              padding: '1rem 0',
              alignSelf: 'stretch',
              opacity: 0.1,
            }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.625rem', width: '100%' }}>
          <section style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: isMobile ? 'auto' : '200px',
                alignItems: 'flex-start',
                gap: '0.625rem',
                flex: 1,
              }}
            >
              <h2
                style={{
                  marginTop: '-1px',
                  fontFamily: "'Inter', Helvetica, sans-serif",
                  fontWeight: 600,
                  color: isDark ? 'white' : '#111111',
                  fontSize: '16px',
                  textAlign: 'center',
                  letterSpacing: '-0.3px',
                  lineHeight: '1rem',
                  whiteSpace: 'nowrap',
                }}
              >
                Description
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', Helvetica, sans-serif",
                  fontWeight: 500,
                  color: isDark ? '#d2d2d2' : '#444444',
                  fontSize: '14px',
                  lineHeight: '1.5rem',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
          </section>
          {!isMobile && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '2rem',
                padding: '2rem',
                width: '100%',
                background: isDark ? '#191919' : '#f8f8f8',
                borderRadius: '1.5rem',
              }}
            >
              <h2
                style={{
                  marginTop: '-1px',
                  fontFamily: "'Inter', Helvetica, sans-serif",
                  fontWeight: 600,
                  color: isDark ? 'white' : '#111111',
                  fontSize: '16px',
                  letterSpacing: '-0.3px',
                  lineHeight: '1rem',
                  whiteSpace: 'nowrap',
                }}
              >
                Shipping
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  {shippingOptions.slice(0, 2).map((option, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flex: 1,
                      }}
                    >
                      <div style={{ fontSize: '2rem', flexShrink: 0, padding: '1rem' }} />
                      <div style={{ fontFamily: "'Inter', Helvetica, sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '14px' }}>
                        <span style={{ fontWeight: 500, color: isDark ? '#d2d2d2' : '#555555' }}>{option.title}</span>
                        <br />
                        <span style={{ fontWeight: 500, color: isDark ? 'white' : '#111111', lineHeight: '1.5rem' }}>{option.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  {shippingOptions.slice(2, 4).map((option, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flex: 1,
                      }}
                    >
                      <div style={{ fontSize: '2rem', flexShrink: 0, padding: '1rem' }} />
                      <div style={{ fontFamily: "'Inter', Helvetica, sans-serif", fontWeight: 400, fontSize: '14px', lineHeight: '14px' }}>
                        <span style={{ fontWeight: 500, color: isDark ? '#d2d2d2' : '#555555' }}>{option.title}</span>
                        <br />
                        <span style={{ fontWeight: 500, color: isDark ? 'white' : '#111111', lineHeight: '1.5rem' }}>{option.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductDetailsSection = ({ isMobile , theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const navigate = useNavigate();
  return (
    <section
      style={{
        gap: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          background: isDark ? '#141414' : '#ffffff',
          borderRadius: isMobile ? '24px' : '32px',
          border: `1px solid ${isDark ? 'rgb(38, 38, 38)' : 'rgb(226, 226, 226)'}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '1rem' : '1rem',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '1rem' : '0',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: '0.625rem',
              flex: 1,
              width: isMobile ? '100%' : 'auto',
            }}
          >
            <h2
              style={{
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 700,
                color: isDark ? 'white' : '#111111',
                fontSize: isMobile ? '28px' : '36px',
                letterSpacing: '-0.3px',
                lineHeight: isMobile ? '2rem' : '2.25rem',
                whiteSpace: 'nowrap',
              }}
            >
              $1999.99
            </h2>
          </div>
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: isMobile ? '0.625rem 0.875rem' : '0.75rem 1rem',
              background: isDark ? 'white' : '#111111',
              border: 'none',
              borderRadius: isMobile ? '24px' : '32px',
              cursor: 'pointer',
              width: isMobile ? '100%' : 'auto',
              justifyContent: isMobile ? 'space-between' : 'flex-start',
            }}
            onClick={ () => navigate('/products/dmc-sparda-tee?Size=S')  }
          >
            <span
              style={{
                fontFamily: "'Inter_Tight', Helvetica, sans-serif",
                fontWeight: 500,
                color: isDark ? 'black' : 'white',
                fontSize: isMobile ? '16px' : '18px',
                lineHeight: isMobile ? '22.4px' : '25.2px',
                whiteSpace: 'nowrap',
              }}
                onClick={() => { }}
            >
              Purchase Now
            </span>
            <div
              style={{
                width: isMobile ? '2rem' : '2.5rem',
                height: isMobile ? '2rem' : '2.5rem',
                background: isDark ? '#141414' : '#ffffff',
                borderRadius: isMobile ? '16px' : '20px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ color: isDark ? 'white' : '#111111', fontSize: '1.2rem' }}>→</div>
            </div>
          </button>
        </div>
      </div>
      {!isMobile && (
        <div
          style={{
            width: '100%',
            flex: 1,
            background: isDark ? '#141414' : '#ffffff',
            borderRadius: '32px',
            border: `1px solid ${isDark ? 'rgb(38, 38, 38)' : 'rgb(226, 226, 226)'}`,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', padding: '2rem' }}>
            <h3
              style={{
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 600,
                color: isDark ? 'white' : '#111111',
                fontSize: '24px',
                letterSpacing: '-0.3px',
                lineHeight: '1.5rem',
                whiteSpace: 'nowrap',
              }}
            >
              Reviews
            </h3>
            {reviewsData.map((review) => (
              <article
                key={review.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '19px',
                  padding: '1.5rem 0',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    background: isDark ? 'rgba(217, 217, 217, 0.08)' : 'rgba(0, 0, 0, 0.06)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      background: 'transparent',
                      color: isDark ? '#666' : '#888',
                      fontSize: '1.5rem',
                      fontFamily: "'Inter', Helvetica, sans-serif",
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <h4
                        style={{
                          fontFamily: "'Inter', Helvetica, sans-serif",
                          fontWeight: 700,
                          color: isDark ? '#d2d2d2' : '#222222',
                          fontSize: '17px',
                          lineHeight: '1.5rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {review.name}
                      </h4>
                      <time
                        style={{
                          opacity: 0.2,
                          fontFamily: "'Inter', Helvetica, sans-serif",
                          fontWeight: 500,
                          fontSize: '14px',
                          lineHeight: '1rem',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {review.date}
                      </time>
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                      {[...Array(5)].map((_, index) => (
                        <div
                          key={index}
                          style={{
                            color: '#FFB547',
                            marginLeft: index === 0 ? 0 : '-0.86px',
                          }}
                        >
                          <StarIcon filled={index < review.rating} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', Helvetica, sans-serif",
                      fontWeight: 500,
                      color: isDark ? '#7e7e7e' : '#555555',
                      fontSize: '15px',
                      lineHeight: '1.5rem',
                    }}
                  >
                    {review.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default function SectionTwo({ isMobile, isTablet, theme = 'dark' }) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobile ? '1rem' : '2rem 4rem',
        width: '100%',
        position: 'relative',
        gap: '12px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gridTemplateRows: 'auto auto',
          gap: '12px',
          width: isMobile ? '100%' : '1300px',
          maxWidth: '100%',
          transform: 'translateY(-1rem)',
          animation: 'fade-in 0.5s ease-out forwards',
          opacity: 1,
        }}
      >
        {!isMobile && (
          <>
            <div
              style={{
                gridRow: '1 / 3',
                gridColumn: 1,
                width: '100%',
                height: '650px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
              }}
            >
              <img
                src="/dump_images/ColumnOne.png"
                alt="Main product showcase"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '32px',
                }}
              />
            </div>
            <div
              style={{
                gridColumn: 2,
                gridRow: 1,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                width: '100%',
                height: '100%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  background: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                }}
              >
                <img
                  src="/dump_images/ColumnTwo.png"
                  alt="Product detail 1"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    borderRadius: '32px',
                  }}
                />
              </div>
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  background: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
                }}
              >
                <img
                  src="/dump_images/ColumnThree.png"
                  alt="Product detail 2"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    borderRadius: '32px',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                gridColumn: 2,
                gridRow: 2,
                width: '100%',
                height: '100%',
                borderRadius: '32px',
                overflow: 'hidden',
                background: theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
              }}
            >
              <img
                src="/dump_images/ColumnFour.png"
                alt="Product detail 3"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '32px',
                }}
              />
            </div>
          </>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '12px',
          width: '100%',
          maxWidth: isMobile ? '100%' : '1300px',
          transform: 'translateY(-1rem)',
          animation: 'fade-in 0.5s ease-out 0.2s forwards',
          opacity: 1,
        }}
      >
        <div style={{ width: '100%' }}>
          <ImageGallerySection isMobile={isMobile} theme={theme} />
        </div>
        <div style={{ width: '100%' }}>
          <ProductDetailsSection isMobile={isMobile} theme={theme} />
        </div>
      </div>
    </section>
  );
}
