import {useLoaderData} from 'react-router';
import type {Route} from './+types/search';
import {getPaginationVariables, Analytics} from '@shopify/hydrogen';
import {SearchForm} from '~/components/SearchForm';
import {SearchResults} from '~/components/SearchResults';
import {
  type RegularSearchReturn,
  type PredictiveSearchReturn,
  getEmptyPredictiveSearchResult,
} from '~/lib/search';
import type {
  RegularSearchQuery,
  PredictiveSearchQuery,
} from 'storefrontapi.generated';

export const meta: Route.MetaFunction = () => {
  return [{title: `Hydrogen | Search`}];
};

export async function loader({request, context}: Route.LoaderArgs) {
  const url = new URL(request.url);
  const isPredictive = url.searchParams.has('predictive');
  
  // For regular search page loads, ignore predictive parameter
  if (!isPredictive) {
    return regularSearch({request, context});
  }
  
  const searchPromise: Promise<PredictiveSearchReturn | RegularSearchReturn> =
    isPredictive
      ? predictiveSearch({request, context})
      : regularSearch({request, context});

  searchPromise.catch((error: Error) => {
    console.error(error);
    return {term: '', result: null, error: error.message};
  });

  return await searchPromise;
}

/**
 * Renders the /search route
 */
export default function SearchPage() {
  const data = useLoaderData<typeof loader>();
  
  // Early return only for predictive searches (used for autocomplete dropdowns)
  if (!data || data.type === 'predictive') {
    return null;
  }
  
  // At this point, we know it's a regular search
  const {term = '', result = null, error} = data;

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '6rem 1.5rem 2rem',
      minHeight: '60vh'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: 'white',
        marginBottom: '2rem',
        letterSpacing: '-0.02em'
      }}>
        Search
      </h1>
      
      <SearchForm>
        {({inputRef}) => (
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '3rem',
            width:"100%"
          }}>
            <input
              defaultValue={term}
              name="q"
              placeholder="Search ..."
              ref={inputRef}
              type="search"
              style={{
                flex: 1,
                width: '100%',
                padding: '0.875rem 1.25rem',
                fontSize: '0.9375rem',
                color: '#656565',
                backgroundColor: '#141414' ,
                border: '1px solid #262626',
                borderRadius: '8px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'white'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#3A3A3C'}
            />
            <button 
              type="submit"
              style={{
                padding: '0.9375rem 2rem',
                fontSize: '0.9375rem',
                fontWeight: '500',
                color: 'black',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                maxHeight:'50px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#E5E5E5';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Search
            </button>
          </div>
        )}
      </SearchForm>
      
      {error && (
        <div style={{
          padding: '1rem 1.25rem',
          backgroundColor: '#2C1618',
          border: '1px solid #5C2020',
          borderRadius: '8px',
          color: '#FF6B6B',
          marginBottom: '2rem',
          fontSize: '0.9375rem'
        }}>
          {error}
        </div>
      )}
      
      {!term || !result?.total ? (
        <div style={{
          textAlign: 'center',
          padding: '4rem 1rem',
          color: '#8E8E93'
        }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            opacity: 0.3
          }}>
          </div>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#C7C7CC',
            marginBottom: '0.5rem'
          }}>
            {term ? 'No results found' : 'Start searching'}
          </h2>
          <p style={{
            fontSize: '0.9375rem',
            color: '#8E8E93'
          }}>
            {term 
              ? 'Try adjusting your search or check the spelling' 
              : 'Enter a search term to find products, articles, and pages'}
          </p>
        </div>
      ) : (
        <div style={{
          marginTop: '2rem'
        }}>
          <div style={{
            marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid #3A3A3C'
          }}>
            <p style={{
              fontSize: '0.9375rem',
              color: '#8E8E93'
            }}>
              Found <span style={{color: 'white', fontWeight: '600'}}>{result.total}</span> results for "{term}"
            </p>
          </div>
          
          <SearchResults result={result} term={term}>
            {({articles, pages, products, term}) => (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem'
              }}>
                <SearchResults.Products products={products} term={term} />
                <SearchResults.Pages pages={pages} term={term} />
                <SearchResults.Articles articles={articles} term={term} />
              </div>
            )}
          </SearchResults>
        </div>
      )}
      
      <Analytics.SearchView data={{searchTerm: term, searchResults: result}} />
    </div>
  );
}

/**
 * Regular search query and fragments
 * (adjust as needed)
 */
const SEARCH_PRODUCT_FRAGMENT = `#graphql
  fragment SearchProduct on Product {
    __typename
    handle
    id
    publishedAt
    title
    trackingParameters
    vendor
    selectedOrFirstAvailableVariant(
      selectedOptions: []
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      id
      image {
        url
        altText
        width
        height
      }
      price {
        amount
        currencyCode
      }
      compareAtPrice {
        amount
        currencyCode
      }
      selectedOptions {
        name
        value
      }
      product {
        handle
        title
      }
    }
  }
` as const;

const SEARCH_PAGE_FRAGMENT = `#graphql
  fragment SearchPage on Page {
     __typename
     handle
    id
    title
    trackingParameters
  }
` as const;

const SEARCH_ARTICLE_FRAGMENT = `#graphql
  fragment SearchArticle on Article {
    __typename
    handle
    id
    title
    trackingParameters
  }
` as const;

const PAGE_INFO_FRAGMENT = `#graphql
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
` as const;

export const SEARCH_QUERY = `#graphql
  query RegularSearch(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $term: String!
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    articles: search(
      query: $term,
      types: [ARTICLE],
      first: $first,
    ) {
      nodes {
        ...on Article {
          ...SearchArticle
        }
      }
    }
    pages: search(
      query: $term,
      types: [PAGE],
      first: $first,
    ) {
      nodes {
        ...on Page {
          ...SearchPage
        }
      }
    }
    products: search(
      after: $endCursor,
      before: $startCursor,
      first: $first,
      last: $last,
      query: $term,
      sortKey: RELEVANCE,
      types: [PRODUCT],
      unavailableProducts: HIDE,
    ) {
      nodes {
        ...on Product {
          ...SearchProduct
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
  ${SEARCH_PRODUCT_FRAGMENT}
  ${SEARCH_PAGE_FRAGMENT}
  ${SEARCH_ARTICLE_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
` as const;

async function regularSearch({
  request,
  context,
}: Pick<Route.LoaderArgs, 'request' | 'context'>): Promise<RegularSearchReturn> {
  const {storefront} = context;
  const url = new URL(request.url);
  const variables = getPaginationVariables(request, {pageBy: 8});
  const term = String(url.searchParams.get('q') || '');

  const {errors, ...items}: {errors?: Array<{message: string}>} & RegularSearchQuery =
    await storefront.query(SEARCH_QUERY, {
      variables: {...variables, term},
    });

  if (!items) {
    throw new Error('No search data returned from Shopify API');
  }

  const total = Object.values(items).reduce(
    (acc: number, {nodes}: {nodes: Array<unknown>}) => acc + nodes.length,
    0,
  );

  const error = errors
    ? errors.map(({message}: {message: string}) => message).join(', ')
    : undefined;

  return {type: 'regular', term, error, result: {total, items}};
}

const PREDICTIVE_SEARCH_ARTICLE_FRAGMENT = `#graphql
  fragment PredictiveArticle on Article {
    __typename
    id
    title
    handle
    blog {
      handle
    }
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
` as const;

const PREDICTIVE_SEARCH_COLLECTION_FRAGMENT = `#graphql
  fragment PredictiveCollection on Collection {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
` as const;

const PREDICTIVE_SEARCH_PAGE_FRAGMENT = `#graphql
  fragment PredictivePage on Page {
    __typename
    id
    title
    handle
    trackingParameters
  }
` as const;

const PREDICTIVE_SEARCH_PRODUCT_FRAGMENT = `#graphql
  fragment PredictiveProduct on Product {
    __typename
    id
    title
    handle
    trackingParameters
    selectedOrFirstAvailableVariant(
      selectedOptions: []
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      id
      image {
        url
        altText
        width
        height
      }
      price {
        amount
        currencyCode
      }
    }
  }
` as const;

const PREDICTIVE_SEARCH_QUERY_FRAGMENT = `#graphql
  fragment PredictiveQuery on SearchQuerySuggestion {
    __typename
    text
    styledText
    trackingParameters
  }
` as const;

const PREDICTIVE_SEARCH_QUERY = `#graphql
  query PredictiveSearch(
    $country: CountryCode
    $language: LanguageCode
    $limit: Int!
    $limitScope: PredictiveSearchLimitScope!
    $term: String!
    $types: [PredictiveSearchType!]
  ) @inContext(country: $country, language: $language) {
    predictiveSearch(
      limit: $limit,
      limitScope: $limitScope,
      query: $term,
      types: $types,
    ) {
      articles {
        ...PredictiveArticle
      }
      collections {
        ...PredictiveCollection
      }
      pages {
        ...PredictivePage
      }
      products {
        ...PredictiveProduct
      }
      queries {
        ...PredictiveQuery
      }
    }
  }
  ${PREDICTIVE_SEARCH_ARTICLE_FRAGMENT}
  ${PREDICTIVE_SEARCH_COLLECTION_FRAGMENT}
  ${PREDICTIVE_SEARCH_PAGE_FRAGMENT}
  ${PREDICTIVE_SEARCH_PRODUCT_FRAGMENT}
  ${PREDICTIVE_SEARCH_QUERY_FRAGMENT}
` as const;

async function predictiveSearch({
  request,
  context,
}: Pick<Route.ActionArgs, 'request' | 'context'>): Promise<PredictiveSearchReturn> {
  const {storefront} = context;
  const url = new URL(request.url);
  const term = String(url.searchParams.get('q') || '').trim();
  const limit = Number(url.searchParams.get('limit') || 10);
  const type = 'predictive';

  if (!term) return {type, term, result: getEmptyPredictiveSearchResult()};

  const {predictiveSearch: items, errors}: PredictiveSearchQuery & {errors?: Array<{message: string}>} =
    await storefront.query(PREDICTIVE_SEARCH_QUERY, {
      variables: {
        limit,
        limitScope: 'EACH',
        term,
      },
    });

  if (errors) {
    throw new Error(
      `Shopify API errors: ${errors.map(({message}: {message: string}) => message).join(', ')}`,
    );
  }

  if (!items) {
    throw new Error('No predictive search data returned from Shopify API');
  }

  const total = Object.values(items).reduce(
    (acc: number, item: Array<unknown>) => acc + item.length,
    0,
  );

  return {type, term, result: {items, total}};
}
