import {Link, useNavigate} from 'react-router';
import {type MappedProductOptions} from '@shopify/hydrogen';
import {AddToCartButton} from './AddToCartButton';
import {useAside} from './Aside';
import type {ProductFragment} from 'storefrontapi.generated';

export function ProductForm({
  productOptions,
  selectedVariant,
}: {
  productOptions: MappedProductOptions[];
  selectedVariant: ProductFragment['selectedOrFirstAvailableVariant'];
}) {
  const navigate = useNavigate();
  const {open} = useAside();
  
  const isSizeOption = (optionName: string) => 
    optionName.toLowerCase() === 'size';
  
  const isMeasurementOption = (optionName: string) => {
    const lowerName = optionName.toLowerCase();
    return lowerName === 'width' || lowerName === 'shoulder' || lowerName === 'length';
  };

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1.5rem'
    }}>
      {productOptions.map((option) => {
        if (option.optionValues.length === 1) return null;

        const showAsCircles = !isSizeOption(option.name) && !isMeasurementOption(option.name);
        const showAsCheckboxes = isMeasurementOption(option.name);

        return (
          <div key={option.name}>
            {!showAsCheckboxes && (
              <h5 style={{
                color: 'white',
                fontSize: '0.875rem',
                marginBottom: '1rem',
                fontWeight: 'normal',
                margin: '0 0 1rem 0'
              }}>
                Select {option.name.toLowerCase()} :
              </h5>
            )}
            
            {showAsCheckboxes ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.75rem'
              }}>
                {option.optionValues.map((value) => {
                  const {
                    name,
                    handle,
                    variantUriQuery,
                    selected,
                    available,
                    exists,
                    isDifferentProduct,
                  } = value;

                  const handleClick = () => {
                    if (!selected && exists) {
                      if (isDifferentProduct) {
                        navigate(`/products/${handle}?${variantUriQuery}`, {
                          replace: true,
                          preventScrollReset: true,
                        });
                      } else {
                        navigate(`?${variantUriQuery}`, {
                          replace: true,
                          preventScrollReset: true,
                        });
                      }
                    }
                  };

                  return (
                    <div
                      key={option.name + name}
                      onClick={handleClick}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem',
                        borderRadius: '0.5rem',
                        border: `1px solid ${selected ? 'white' : '#3A3A3C'}`,
                        backgroundColor: '#1C1C1E',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (exists) {
                          e.currentTarget.style.borderColor = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!selected) {
                          e.currentTarget.style.borderColor = '#3A3A3C';
                        }
                      }}
                    >
                      <div style={{
                        width: '1.5rem',
                        height: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{width: '100%', height: '100%'}}>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.60765 3.25032C5.76475 4.09322 5.7648 5.44979 5.76475 8.16305L5.76475 15.8371C5.76475 18.5504 5.76475 19.907 6.60769 20.7499C7.45056 21.5928 8.80714 21.5928 11.5204 21.5928L12.4796 21.5928C15.1928 21.5928 16.5495 21.5928 17.3923 20.7499C18.2352 19.907 18.2352 18.5504 18.2352 15.8372L18.2353 8.16306C18.2352 5.4498 18.2353 4.09324 17.3923 3.25032C16.5495 2.40743 15.1928 2.40743 12.4796 2.40743L11.5204 2.40743C8.80715 2.40743 7.45054 2.40743 6.60765 3.25032Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div style={{
                        flex: 1,
                        fontSize: '0.875rem',
                        minWidth: 0
                      }}>
                        <span style={{color: '#D3D3D3'}}>{option.name} </span>
                        <span style={{color: 'white', fontWeight: 500}}>{name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : showAsCircles ? (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                {option.optionValues.map((value) => {
                  const {
                    name,
                    handle,
                    variantUriQuery,
                    selected,
                    available,
                    exists,
                    isDifferentProduct,
                    swatch,
                  } = value;

                  const handleClick = () => {
                    if (!selected && exists) {
                      if (isDifferentProduct) {
                        navigate(`/products/${handle}?${variantUriQuery}`, {
                          replace: true,
                          preventScrollReset: true,
                        });
                      } else {
                        navigate(`?${variantUriQuery}`, {
                          replace: true,
                          preventScrollReset: true,
                        });
                      }
                    }
                  };

                  return (
                    <button
                      key={option.name + name}
                      onClick={handleClick}
                      disabled={!exists}
                      style={{
                        width: '2rem',
                        height: '2rem',
                        borderRadius: '50%',
                        border: selected ? '2px solid white' : '1px solid #3A3A3C',
                        backgroundColor: swatch?.color || '#D3D3D3',
                        opacity: available ? 1 : 0.3,
                        cursor: exists ? 'pointer' : 'not-allowed',
                        transition: 'all 0.2s',
                        padding: 0
                      }}
                      aria-label={`Select ${name}`}
                    >
                      {swatch?.image?.previewImage?.url && (
                        <img
                          src={swatch.image.previewImage.url}
                          alt={name}
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover'
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
                    <div
                    style={{
                        display: 'flex',
                        gap: '0.5rem',
                        justifyContent: 'space-between'
                    }}
                    >
                {option.optionValues.map((value) => {
                  const {
                    name,
                    handle,
                    variantUriQuery,
                    selected,
                    available,
                    exists,
                    isDifferentProduct,
                  } = value;

                  const handleClick = () => {
                    if (!selected && exists) {
                      if (isDifferentProduct) {
                        navigate(`/products/${handle}?${variantUriQuery}`, {
                          replace: true,
                          preventScrollReset: true,
                        });
                      } else {
                        navigate(`?${variantUriQuery}`, {
                          replace: true,
                          preventScrollReset: true,
                        });
                      }
                    }
                  };

                  const getButtonStyle = () => {
                    if (!exists) {
                      return {
                        borderColor: '#D5D5D5',
                        color: '#D5D5D5',
                        cursor: 'not-allowed',
                        backgroundColor: 'transparent'
                      };
                    }
                    if (selected) {
                      return {
                        borderColor: 'white',
                        color: 'white',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        cursor: 'pointer'
                      };
                    }
                    return {
                      borderColor: '#D3D3D3',
                      color: '#D3D3D3',
                      cursor: 'pointer',
                      backgroundColor: 'transparent'
                    };
                  };

                  const buttonStyle = getButtonStyle();

                  return (
                    <button
                      key={option.name + name}
                      onClick={handleClick}
                      disabled={!exists}
                      style={{
                        padding: '0.825rem 1.5rem',
                        borderRadius: '8px',
                        border: '1px solid',
                        fontSize: '0.8125rem',
                        fontWeight: 400,
                        transition: 'all 0.2s',
                        opacity: available ? 1 : 0.3,
                        letterSpacing: '0.01em',
                        flex: 1,              
                        ...buttonStyle
                      }}
                      onMouseEnter={(e) => {
                        if (exists && !selected) {
                          e.currentTarget.style.borderColor = 'white';
                          e.currentTarget.style.color = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (exists && !selected) {
                          e.currentTarget.style.borderColor = '#D3D3D3';
                          e.currentTarget.style.color = '#D3D3D3';
                        }
                      }}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      
      <AddToCartButton
        disabled={!selectedVariant || !selectedVariant.availableForSale}
        onClick={() => {
          open('cart');
        }}
        lines={
          selectedVariant
            ? [
                {
                  merchandiseId: selectedVariant.id,
                  quantity: 1,
                  selectedVariant,
                },
              ]
            : []
        }
        className=""
      >
        {selectedVariant?.availableForSale ? 'Add to Cart' : 'Sold out'}
      </AddToCartButton>
    </div>
  );
}
