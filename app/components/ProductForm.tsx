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

  return (
    <div className="space-y-8">
      {productOptions.map((option) => {
        if (option.optionValues.length === 1) return null;

        const showAsCircles = !isSizeOption(option.name);

        return (
          <div key={option.name}>
            <h5 className="text-sm font-medium mb-4">{option.name} :</h5>
            <div className="flex gap-3 flex-wrap">
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
                      className="product-options-item"
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
                              : 'ring-1 ring-gray-700'
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
                        <button
                          className={`px-4 py-2 rounded-full border transition-all font-semibold ${
                            selected
                              ? 'bg-white text-black border-white'
                              : 'bg-black text-white border-gray-700 hover:border-gray-500'
                          }`}
                          style={{
                            opacity: available ? 1 : 0.3,
                          }}
                        >
                          {name}
                        </button>
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
                        if (!selected) {
                          void navigate(`?${variantUriQuery}`, {
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
                              : 'ring-1 ring-gray-700'
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
                          className={`px-4 py-2 rounded-lg border transition-all font-semibold ${
                            selected
                              ? 'bg-white text-black border-white'
                              : 'bg-black text-white border-gray-700 hover:border-gray-500'
                          } ${exists ? 'cursor-pointer' : 'cursor-not-allowed opacity-30'}`}
                        >
                          {name}
                        </div>
                      )}
                    </button>
                  );
                }
              })}
            </div>
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
        className="w-full bg-white hover:bg-gray-100 text-black py-4 px-6 rounded-lg font-semibold transition-colors mt-6"
      >
        {selectedVariant?.availableForSale ? 'Add to cart' : 'Sold out'}
      </AddToCartButton>
    </div>
  );
}
