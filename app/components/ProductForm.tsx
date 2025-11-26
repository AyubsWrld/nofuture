import {Link, useNavigate} from 'react-router';
import {type MappedProductOptions} from '@shopify/hydrogen';
import type {
  Maybe,
  ProductOptionValueSwatch,
} from '@shopify/hydrogen/storefront-api-types';
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
    <div className="space-y-6">
      {productOptions.map((option) => {
        if (option.optionValues.length === 1) return null;

        const showAsCircles = !isSizeOption(option.name) && !isMeasurementOption(option.name);
        const showAsCheckboxes = isMeasurementOption(option.name);

        return (
          <div key={option.name}>
            {!showAsCheckboxes && (
              <h5 className="text-sm font-normal text-gray-300 mb-3">
                Select {option.name.toLowerCase()} :
              </h5>
            )}
            
            {showAsCheckboxes ? (
              <div className="flex gap-6">
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
                    <label
                      key={option.name + name}
                      className="flex items-start gap-2 cursor-pointer"
                      onClick={handleClick}
                    >
                      <div className="product-form-size-button">
                        {selected && (
                          <div className="w-2.5 h-2.5 bg-white" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white">
                          {option.name}
                        </span>
                        <span className="text-xs text-gray-500">{name}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            ) : (
              <div className="product-form-size-button-container">
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

                  if (isDifferentProduct) {
                    return (
                      <Link
                        key={option.name + name}
                        prefetch="intent"
                        preventScrollReset
                        replace
                        to={`/products/${handle}?${variantUriQuery}`}
                        style={{
                          opacity: available ? 1 : 0.3,
                        }}
                      >
                        {showAsCircles ? (
                          <div
                            className={`w-10 h-10 rounded-full transition-all ${
                              selected
                                ? 'ring-2 ring-offset-2 ring-offset-black ring-white'
                                : ''
                            }`}
                            style={{
                              backgroundColor: swatch?.color || 'transparent',
                            }}
                          >
                            {swatch?.image?.previewImage?.url && (
                              <img
                                src={swatch.image.previewImage.url}
                                alt={name}
                                className="w-full h-full rounded-full object-cover"
                              />
                            )}
                          </div>
                        ) : (
                          <div
                            className={`px-8 py-2.5 border-2 transition-all text-sm font-normal ${
                              selected
                                ? 'bg-white text-black border-[#D3D3D3]'
                                : 'bg-transparent text-white border-gray-700 hover:border-gray-500'
                            }`}
                            style={{
                              borderRadius: '4px'
                            }}
                          >
                            {name}
                          </div>
                        )}
                      </Link>
                    );
                  } else {
                    return (
                      <button
                        type="button"
                        key={option.name + name}
                        disabled={!exists}
                        onClick={() => {
                          if (!selected && exists) {
                            navigate(`?${variantUriQuery}`, {
                              replace: true,
                              preventScrollReset: true,
                            });
                          }
                        }}
                        style={{
                          opacity: available ? 1 : 0.3,
                        }}
                      >
                        {showAsCircles ? (
                          <div
                            className={`w-10 h-10 rounded-full transition-all ${
                              selected
                                ? 'ring-2 ring-offset-2 ring-offset-black ring-white'
                                : ''
                            } ${exists ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                            style={{
                              backgroundColor: swatch?.color || 'transparent',
                            }}
                          >
                            {swatch?.image?.previewImage?.url && (
                              <img
                                src={swatch.image.previewImage.url}
                                alt={name}
                                className="w-full h-full rounded-full object-cover"
                              />
                            )}
                          </div>
                        ) : (
                          <div
                            className={`px-8 py-2.5 border-2 transition-all text-sm font-normal ${
                              selected
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-white border-gray-700 hover:border-gray-500'
                            } ${exists ? 'cursor-pointer' : 'cursor-not-allowed opacity-30'}`}
                            style={{
                              borderRadius: '4px'
                            }}
                          >
                            {name}
                          </div>
                        )}
                      </button>
                    );
                  }
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
        className="w-full text-red hover:bg-gray-100 text-black py-3 px-6 font-normal transition-colors"
        style={{
          backgroundColor: 'red',
        }}
      >
        {selectedVariant?.availableForSale ? 'Add to Cart' : 'Sold out'}
      </AddToCartButton>
    </div>
  );
}
