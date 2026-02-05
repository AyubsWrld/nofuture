import {redirect, useLoaderData} from 'react-router';
import type {Route} from './+types/products.$handle';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
} from '@shopify/hydrogen';
import {ProductPrice} from '~/components/ProductPrice';
import {ProductImage} from '~/components/ProductImage';
import {ProductForm} from '~/components/ProductForm';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';

export const meta: Route.MetaFunction = ({data}) => {
  return [
    {title: `Hydrogen | ${data?.product.title ?? ''}`},
    {
      rel: 'canonical',
      href: `/products/${data?.product.handle}`,
    },
  ];
};

export async function loader(args: Route.LoaderArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context, params, request}: Route.LoaderArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  const [{product}] = await Promise.all([
    storefront.query(PRODUCT_QUERY, {
      variables: {handle, selectedOptions: getSelectedProductOptions(request)},
    }),
  ]);

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  redirectIfHandleIsLocalized(request, {handle, data: product});

  return {
    product,
  };
}

function loadDeferredData({context, params}: Route.LoaderArgs) {
  return {};
}

export default function Product() {
  const {product} = useLoaderData<typeof loader>();

  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);

  const productOptions = getProductOptions({
    ...product,
    selectedOrFirstAvailableVariant: selectedVariant,
  });

  const {title, descriptionHtml} = product;

  return (
    // <div className="min-h-screen text-white">
    <div className="min-h-screen text-white pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square bg-black rounded-lg overflow-hidden border border-gray-900">
              <ProductImage image={selectedVariant?.image} />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-start lg:pt-8">
            <div className="flex flex-col justify-start pt-0 sm:pt-4 lg:pt-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
                {title}
              </h1>

              {/* Price */}
              <div className="text-xl sm:text-2xl mb-6">
                <ProductPrice
                  price={selectedVariant?.price}
                  compareAtPrice={selectedVariant?.compareAtPrice}
                />
              </div>
            </div>

            {/* Product Form */}
            <div className="mb-6 sm:mb-8">
              <ProductForm
                productOptions={productOptions}
                selectedVariant={selectedVariant}
              />
            </div>

            {/* Description */}
            <div className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              <div dangerouslySetInnerHTML={{__html: descriptionHtml}} />
            </div>

            {/* Benefits Section */}
            <div className="pt-6 border-t border-gray-900">
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"> */}
              {/*   <div className="flex flex-row items-center gap-3"> */}
              {/*     <div className="bg-gray-900 text-gray-400 p-3 sm:p-4 rounded-lg flex-shrink-0"> */}
              {/*       📦 */}
              {/*     </div> */}
              {/*     <div className="flex flex-col gap-1"> */}
              {/*       <div className="text-xs sm:text-sm font-medium text-gray-500"> */}
              {/*         Free Delivery */}
              {/*       </div> */}
              {/*       <div className="text-sm sm:text-base text-white"> */}
              {/*         1-2 day */}
              {/*       </div> */}
              {/*     </div> */}
              {/*   </div> */}
              {/**/}
              {/*   <div className="flex flex-row items-center gap-3"> */}
              {/*     <div className="bg-gray-900 text-gray-400 p-3 sm:p-4 rounded-lg flex-shrink-0"> */}
              {/*       📦 */}
              {/*     </div> */}
              {/*     <div className="flex flex-col gap-1"> */}
              {/*       <div className="text-xs sm:text-sm font-medium text-gray-500"> */}
              {/*         Free Delivery */}
              {/*       </div> */}
              {/*       <div className="text-sm sm:text-base text-white"> */}
              {/*         1-2 day */}
              {/*       </div> */}
              {/*     </div> */}
              {/*   </div> */}
              {/**/}
              {/*   <div className="flex flex-row items-center gap-3 sm:col-span-2 lg:col-span-1"> */}
              {/*     <div className="bg-gray-900 text-gray-400 p-3 sm:p-4 rounded-lg flex-shrink-0"> */}
              {/*       📦 */}
              {/*     </div> */}
              {/*     <div className="flex flex-col gap-1"> */}
              {/*       <div className="text-xs sm:text-sm font-medium text-gray-500"> */}
              {/*         Free Delivery */}
              {/*       </div> */}
              {/*       <div className="text-sm sm:text-base text-white"> */}
              {/*         1-2 day */}
              {/*       </div> */}
              {/*     </div> */}
              {/*   </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </div>
  );
}

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
` as const;

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    encodedVariantExistence
    encodedVariantAvailability
    options {
      name
      optionValues {
        name
        firstSelectableVariant {
          ...ProductVariant
        }
        swatch {
          color
          image {
            previewImage {
              url
            }
          }
        }
      }
    }
    selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    adjacentVariants (selectedOptions: $selectedOptions) {
      ...ProductVariant
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
` as const;

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
` as const;
