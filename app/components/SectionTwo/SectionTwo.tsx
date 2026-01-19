import React, { useState } from 'react';

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
  { name: "White", color: "#ffffff" },
  { name: "Blue", color: "#aab8ff" },
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
  // const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div style={{
      maxWidth: '638px',
      padding: '2rem',
      background: '#141414',
      borderRadius: '32px',
      border: '1px solid rgb(38, 38, 38)',
      width: '100%',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.625rem',
      }}>
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <h1 style={{
            marginTop: '-1px',
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontWeight: 600,
            color: 'white',
            fontSize: '46px',
            textAlign: 'center',
            letterSpacing: '-0.3px',
            lineHeight: '46px',
            whiteSpace: 'nowrap',
          }}>
            Dragonite Slab
          </h1>
          <div style={{
            width: '46px',
            height: '46px',
            background: '#1b1b1b',
            borderRadius: '999px',
            border: '1px solid rgb(38, 38, 38)',
          }}></div>
        </header>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem',
          width: '100%',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.125rem',
          }}>
            <div style={{ color: '#FFB547' }}>
              <StarIcon filled={true} />
            </div>
            <span style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontWeight: 500,
              color: 'white',
              fontSize: '15px',
              textAlign: 'center',
              lineHeight: '1rem',
              whiteSpace: 'nowrap',
            }}>4.9</span>
            <span style={{
              opacity: 0.6,
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontWeight: 500,
              color: 'white',
              fontSize: '15px',
              textAlign: 'center',
              lineHeight: '1rem',
              whiteSpace: 'nowrap',
            }}>(4100) Reviews</span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
          <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1rem',
            padding: '2rem 0.75rem 2rem 0',
            flex: 1,
          }}>
            <h2 style={{
              marginTop: '-1px',
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontWeight: 600,
              color: 'white',
              fontSize: '16px',
              textAlign: 'center',
              letterSpacing: '-0.3px',
              lineHeight: '1rem',
              whiteSpace: 'nowrap',
            }}>Color</h2>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1.5rem',
              width: '100%',
            }}>
              {colorOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(option.name)}
                  style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.25rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '64px',
                      border: '1px solid rgb(38, 38, 38)',
                      transition: 'all 0.2s',
                      backgroundColor: option.color,
                      boxShadow: selectedColor === option.name ? '0 0 0 2px white' : 'none',
                    }}
                  />
                  <span style={{
                    opacity: 0.6,
                    fontFamily: "'Inter', Helvetica, sans-serif",
                    fontWeight: 400,
                    color: 'white',
                    fontSize: '12px',
                    textAlign: 'center',
                    letterSpacing: '-0.3px',
                    lineHeight: '0.75rem',
                    whiteSpace: 'nowrap',
                  }}>{option.name}</span>
                </button>
              ))}
            </div>
          </section>

          <div style={{
            display: 'flex',
            width: '0.625rem',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.625rem',
            padding: '1rem 0',
            alignSelf: 'stretch',
            opacity: 0.1,
          }}>
            {/* <div style={{ */}
            {/*   alignSelf: 'stretch', */}
            {/*   width: '1px', */}
            {/*   background: '#d9d9d9', */}
            {/* }}></div> */}
          </div>

          {/* <section style={{ */}
          {/*   display: 'flex', */}
          {/*   flexDirection: 'column', */}
          {/*   alignItems: 'flex-start', */}
          {/*   gap: '1rem', */}
          {/*   padding: '0rem 0 2rem 0.75rem', */}
          {/*   flex: 1, */}
          {/* }}> */}
            {/* <h2 style={{ */}
            {/*   marginTop: '-1px', */}
            {/*   fontFamily: "'Inter', Helvetica, sans-serif", */}
            {/*   fontWeight: 600, */}
            {/*   color: 'white', */}
            {/*   fontSize: '16px', */}
            {/*   textAlign: 'center', */}
            {/*   letterSpacing: '-0.3px', */}
            {/*   lineHeight: '1rem', */}
            {/*   whiteSpace: 'nowrap', */}
            {/* }}>Size</h2> */}
            {/* <div style={{ */}
            {/*   display: 'flex', */}
            {/*   flexWrap: 'wrap', */}
            {/*   alignItems: 'center', */}
            {/*   gap: '1.5rem', */}
            {/*   width: '100%', */}
            {/* }}> */}
            {/*   {sizeOptions.map((size, index) => ( */}
            {/*     <button */}
            {/*       key={index} */}
            {/*       onClick={() => setSelectedSize(size)} */}
            {/*       style={{ */}
            {/*         height: 'auto', */}
            {/*         display: 'flex', */}
            {/*         flexDirection: 'column', */}
            {/*         width: '4rem', */}
            {/*         height: '2rem', */}
            {/*         alignItems: 'center', */}
            {/*         justifyContent: 'center', */}
            {/*         gap: '0.25rem', */}
            {/*         background: '#1b1b1b', */}
            {/*         borderRadius: '1.5rem', */}
            {/*         border: '1px solid rgb(38, 38, 38)', */}
            {/*         cursor: 'pointer', */}
            {/*         transition: 'all 0.2s', */}
            {/*         boxShadow: selectedSize === size ? '0 0 0 2px white' : 'none', */}
            {/*       }} */}
            {/*     > */}
            {/*       <span style={{ */}
            {/*         fontFamily: "'Inter', Helvetica, sans-serif", */}
            {/*         fontWeight: 400, */}
            {/*         color: 'white', */}
            {/*         fontSize: '12px', */}
            {/*         textAlign: 'center', */}
            {/*         letterSpacing: '-0.3px', */}
            {/*         lineHeight: '0.75rem', */}
            {/*         whiteSpace: 'nowrap', */}
            {/*       }}>{size}</span> */}
            {/*     </button> */}
            {/*   ))} */}
            {/* </div> */}
          {/* </section> */}
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.625rem',
          width: '100%',
        }}>
          <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            width: '100%',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              height: '200px',
              alignItems: 'flex-start',
              gap: '0.625rem',
              flex: 1,
            }}>
              <h2 style={{
                marginTop: '-1px',
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 600,
                color: 'white',
                fontSize: '16px',
                textAlign: 'center',
                letterSpacing: '-0.3px',
                lineHeight: '1rem',
                whiteSpace: 'nowrap',
              }}>Description</h2>
              <p style={{
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 500,
                color: '#d2d2d2',
                fontSize: '14px',
                lineHeight: '1.5rem',
              }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's.Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.
              </p>
            </div>
          </section>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '2rem',
            padding: '2rem',
            width: '100%',
            background: '#191919',
            borderRadius: '1.5rem',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.625rem',
              width: '100%',
            }}>
              <h2 style={{
                marginTop: '-1px',
                fontFamily: "'Inter', Helvetica, sans-serif",
                fontWeight: 600,
                color: 'white',
                fontSize: '16px',
                textAlign: 'center',
                letterSpacing: '-0.3px',
                lineHeight: '1rem',
                whiteSpace: 'nowrap',
              }}>Shipping</h2>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '1.5rem',
              width: '100%',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
                {shippingOptions.slice(0, 2).map((option, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flex: 1,
                    borderRadius: '0.5rem',
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      flexShrink: 0,
                      padding: '1rem',
                    }}></div>
                    <div style={{
                      fontFamily: "'Inter', Helvetica, sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '14px',
                    }}>
                      <span style={{
                        fontWeight: 500,
                        color: '#d2d2d2',
                        lineHeight: '0.1px',
                      }}>{option.title}</span>
                      <br />
                      <span style={{
                        fontWeight: 500,
                        color: 'white',
                        lineHeight: '1.5rem',
                      }}>{option.duration}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
                {shippingOptions.slice(2, 4).map((option, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flex: 1,
                    borderRadius: '0.5rem',
                  }}>
                    <div style={{
                      fontSize: '2rem',
                      flexShrink: 0,
                      padding: '1rem',
                    }}></div>
                    <div style={{
                      fontFamily: "'Inter', Helvetica, sans-serif",
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '14px',
                    }}>
                      <span style={{
                        fontWeight: 500,
                        color: '#d2d2d2',
                        lineHeight: '0.1px',
                      }}>{option.title}</span>
                      <br />
                      <span style={{
                        fontWeight: 500,
                        color: 'white',
                        lineHeight: '1.5rem',
                      }}>{option.duration}</span>
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
    <section style={{
      gap: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      height: '100%',
      width: '100%',
    }}>
      <div style={{
        width: '100%',
        background: '#141414',
        borderRadius: '32px',
        border: '1px solid rgb(38, 38, 38)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '0.625rem',
            flex: 1,
            flexGrow: 1,
          }}>
            <h2 style={{
              fontFamily: "'Inter', Helvetica, sans-serif",
              fontWeight: 700,
              color: 'white',
              fontSize: '36px',
              letterSpacing: '-0.3px',
              lineHeight: '2.25rem',
              whiteSpace: 'nowrap',
            }}>$1999.99</h2>
          </div>

          <button style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            padding: '0.75rem 1rem',
            height: 'auto',
            background: 'white',
            border: 'none',
            borderRadius: '32px',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}>
            <span style={{
              fontFamily: "'Inter_Tight', Helvetica, sans-serif",
              fontWeight: 500,
              color: 'black',
              fontSize: '18px',
              lineHeight: '25.2px',
              whiteSpace: 'nowrap',
            }}>Purchase Now</span>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              background: '#141414',
              borderRadius: '20px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                color: 'white',
                fontSize: '1.2rem',
              }}>→</div>
            </div>
          </button>
        </div>
      </div>

      <div style={{
        width: '100%',
        flex: 1,
        background: '#141414',
        borderRadius: '32px',
        border: '1px solid rgb(38, 38, 38)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.625rem',
          padding: '2rem',
        }}>
          <h3 style={{
            fontFamily: "'Inter', Helvetica, sans-serif",
            fontWeight: 600,
            color: 'white',
            fontSize: '24px',
            letterSpacing: '-0.3px',
            lineHeight: '1.5rem',
            whiteSpace: 'nowrap',
          }}>Reviews</h3>

          {reviewsData.map((review) => (
            <article key={review.id} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '19px',
              padding: '1.5rem 0',
              width: '100%',
              borderRadius: '10px',
            }}>
              <div style={{
                width: '3.5rem',
                height: '3.5rem',
                background: 'rgba(217, 217, 217, 0.08)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  background: 'transparent',
                  color: '#666',
                  fontSize: '1.5rem',
                  fontFamily: "'Inter', Helvetica, sans-serif",
                }}>{review.name.charAt(0)}</div>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.5rem',
                flex: 1,
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  alignItems: 'flex-start',
                  width: '100%',
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    width: '100%',
                  }}>
                    <h4 style={{
                      fontFamily: "'Inter', Helvetica, sans-serif",
                      fontWeight: 700,
                      color: '#d2d2d2',
                      fontSize: '17px',
                      lineHeight: '1.5rem',
                      whiteSpace: 'nowrap',
                    }}>{review.name}</h4>
                    <time style={{
                      opacity: 0.2,
                      fontFamily: "'Inter', Helvetica, sans-serif",
                      fontWeight: 500,
                      color: '#000',
                      fontSize: '14px',
                      textAlign: 'right',
                      lineHeight: '1rem',
                      whiteSpace: 'nowrap',
                    }}>{review.date}</time>
                  </div>

                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {[...Array(5)].map((_, index) => (
                      <div key={index} style={{
                        color: '#FFB547',
                        marginLeft: index === 0 ? 0 : '-0.86px',
                      }}>
                        <StarIcon filled={index < review.rating} />
                      </div>
                    ))}
                  </div>
                </div>

                <p style={{
                  fontFamily: "'Inter', Helvetica, sans-serif",
                  fontWeight: 500,
                  color: '#7e7e7e',
                  fontSize: '15px',
                  lineHeight: '1.5rem',
                }}>{review.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function SectionTwo() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: isMobile ? '1rem' : '2rem 4rem',
      width: '100%',
      position: 'relative',
      gap: '12px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '12px',
        width: isMobile ? '100%' : '1300px',
        maxWidth: '100%',
        transform: 'translateY(-1rem)',
        animation: 'fade-in 0.5s ease-out forwards',
        opacity: 1,
      }}>
        <div style={{
          gridRow: isMobile ? 'auto' : '1 / 3',
          gridColumn: 1,
          width: '100%',
          height: isMobile ? '400px' : '650px',
          borderRadius: '32px',
          overflow: 'hidden',
          background: '#1a1a1a',
        }}>
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
              borderWidth: '1px',
            }}
          />
        </div>

        <div style={{
          gridColumn: isMobile ? 1 : 2,
          gridRow: isMobile ? 'auto' : 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          width: '100%',
          height: '100%',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '32px',
            overflow: 'hidden',
            background: '#1a1a1a',
          }}>
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
                borderWidth: '1px',
              }}
            />
          </div>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '32px',
            overflow: 'hidden',
            background: '#1a1a1a',
          }}>
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
                borderWidth: '1px',
              }}
            />
          </div>
        </div>

        <div style={{
          gridColumn: isMobile ? 1 : 2,
          gridRow: isMobile ? 'auto' : 2,
          width: '100%',
          height: '100%',
          borderRadius: '32px',
          overflow: 'hidden',
          background: '#1a1a1a',
        }}>
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
              borderWidth: '1px',
            }}
          />
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '12px',
        width: '100%',
        maxWidth: isMobile ? '100%' : '1300px',
        transform: 'translateY(-1rem)',
        animation: 'fade-in 0.5s ease-out 0.2s forwards',
        opacity: 1,
      }}>
        <div style={{ width: '100%' }}>
          <ImageGallerySection />
        </div>
        <div style={{ width: '100%' }}>
          <ProductDetailsSection />
        </div>
      </div>
    </section>
  );
}
