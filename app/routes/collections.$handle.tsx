import {redirect, useLoaderData} from 'react-router';
import type {Route} from './+types/collections.$handle';

import {
  getPaginationVariables,
  Analytics,
} from '@shopify/hydrogen';

import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {ProductItem} from '~/components/ProductItem';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';

import type {ProductItemFragment} from 'storefrontapi.generated';

/* -------------------------------------------------------------------------- */
/*                                   Meta                                     */
/* -------------------------------------------------------------------------- */

export const meta: Route.MetaFunction = ({data}) => {
  return [
    {
      title: data?.collection
        ? `Hydrogen | ${data.collection.title}`
        : 'Hydrogen | Collection',
    },
  ];
};

/* -------------------------------------------------------------------------- */
/*                                   Loader                                   */
/* -------------------------------------------------------------------------- */

export async function loader(args: Route.LoaderArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);

  return {
    ...deferredData,
    ...criticalData,
  };
}

/* --------------------------- Critical (Above Fold) -------------------------- */

async function loadCriticalData({
  context,
  params,
  request,
}: Route.LoaderArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw redirect('/collections');
  }

  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  const {collection} = await storefront.query(COLLECTION_QUERY, {
    variables: {
      handle,
      ...paginationVariables,
    },
  });

  if (!collection) {
    throw new Response(`Collection "${handle}" not found`, {
      status: 404,
    });
  }

  redirectIfHandleIsLocalized(request, {
    handle,
    data: collection,
  });

  return {collection};
}

/* --------------------------- Deferred (Below Fold) --------------------------- */

function loadDeferredData(_: Route.LoaderArgs) {
  return {};
}

/* -------------------------------------------------------------------------- */
/*                                 Component                                  */
/* -------------------------------------------------------------------------- */

export default function Collection() {
  const {collection} = useLoaderData<typeof loader>();

  return (
    <div className="collection-page">
      <header className="collection-header">
        <h1 className="collection-title">{collection.title}</h1>

        {collection.description && (
          <p className="collection-description">
            {collection.description}
          </p>
        )}
      </header>

      <PaginatedResourceSection<ProductItemFragment>
        connection={collection.products}
        resourcesClassName="products-grid"
      >
        {({node: product, index}) => (
          <ProductItem
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        )}
      </PaginatedResourceSection>

      <Analytics.CollectionView
        data={{
          collection: {
            id: collection.id,
            handle: collection.handle,
          },
        }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  GraphQL                                   */
/* -------------------------------------------------------------------------- */

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }

  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
` as const;

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}

  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first
        last: $last
        before: $startCursor
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
` as const;
