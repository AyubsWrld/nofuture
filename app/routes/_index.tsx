import {Await, useLoaderData, Link} from 'react-router';
import type {Route} from './+types/_index';
import { Banner } from '../components/Banner' ;
import {Suspense, useState, useEffect} from 'react';
import {Image} from '@shopify/hydrogen';
import type {
  FeaturedCollectionFragment,
  RecommendedProductsQuery,
} from 'storefrontapi.generated';
import {ProductItem} from '~/components/ProductItem';
import SectionTwo from '../components/SectionTwo/SectionTwo';

const styles = {
  home: {
    gap: '120px',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  homeImage: {
    position: 'relative' as const,
    left: '50%',
    marginLeft: '-50vw',
    marginBottom: '32px',
    marginTop: '64px',
    display: 'block',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgb(0,0,0)',
    maxHeight: '720px',
  },
  homeImageMobile: {
    marginTop: '32px',
    marginBottom: '16px',
    maxHeight: '50vh',
    minHeight: '400px',
  },
  video: {
    pointerEvents: 'none' as const,
  },
  videoPagination: {
    position: 'absolute' as const,
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
  },
  videoPaginationMobile: {
    bottom: '1rem',
  },
  videoPaginationContainer: {
    display: 'flex',
    zIndex: 10,
    alignItems: 'center',
    gap: '0.5rem',
    padding: '10px 16px',
    backgroundColor: '#191919',
    borderColor: '#333535',
    borderRadius: '999px',
    borderWidth: '1px',
  },
  videoPaginationContainerMobile: {
    padding: '8px 12px',
    gap: '0.375rem',
  },
  videoPaginationDot: {
    width: '0.625rem',
    height: '0.625rem',
    borderRadius: '9999px',
    transition: 'all 0.3s',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#3d3d3d',
  },
  videoPaginationDotMobile: {
    width: '0.5rem',
    height: '0.5rem',
  },
  videoPaginationDotActive: {
    width: '2rem',
    backgroundColor: '#ffffff',
  },
  videoPaginationDotActiveMobile: {
    width: '1.5rem',
  },
  recommendedProducts: {
    padding: '3.5rem',
    gap: '32px',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  recommendedProductsMobile: {
    padding: '2rem 1.5rem',
    gap: '24px',
  },
  indexCategoryHeading: {
    fontSize: '32px',
    fontWeight: 600,
  },
  indexCategoryHeadingMobile: {
    fontSize: '24px',
  },
  recommendedProductsGrid: {
    display: 'grid',
    gridGap: '1.5rem',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  recommendedProductsGridTablet: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  recommendedProductsGridMobile: {
    gridTemplateColumns: '1fr',
    gridGap: '1rem',
  },
};

export const meta: Route.MetaFunction = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader(args: Route.LoaderArgs) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context}: Route.LoaderArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

function loadDeferredData({context}: Route.LoaderArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error: Error) => {
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkResponsive = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  return (
    <div style={styles.home}>
      <FeaturedCollection collection={data.featuredCollection} isMobile={isMobile} />
      <SectionTwo />
      <RecommendedProducts products={data.recommendedProducts} isMobile={isMobile} isTablet={isTablet} />
      <Banner/>
    </div>
  );
}

function FeaturedCollection({
  collection,
  isMobile,
}: {
  collection: FeaturedCollectionFragment;
  isMobile: boolean;
}) {
  const [activeVideo, setActiveVideo] = useState(0);
  
  if (!collection) return null;
  
  const videos = [
    "/videos/WithCard.mp4",
    "/videos/WithoutCard.mp4"
  ];

  const homeImageStyle = {
    ...styles.homeImage,
    ...(isMobile && styles.homeImageMobile),
  };

  const paginationStyle = {
    ...styles.videoPagination,
    ...(isMobile && styles.videoPaginationMobile),
  };

  const paginationContainerStyle = {
    ...styles.videoPaginationContainer,
    ...(isMobile && styles.videoPaginationContainerMobile),
  };

  return (
    <Link
      to={`/collections/${collection.handle}`}
      style={homeImageStyle}
    >
      {/* video 1 */}
      <video
        style={styles.video}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
          activeVideo === 0 ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={videos[0]} type="video/mp4" />
      </video>

      {/* video 2 */}
      <video
        style={styles.video}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
          activeVideo === 1 ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={videos[1]} type="video/mp4" />
      </video>

      {/* pagination dots */}
      <div style={paginationStyle}>
        <div style={paginationContainerStyle}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setActiveVideo(0);
            }}
            style={{
              ...styles.videoPaginationDot,
              ...(isMobile && styles.videoPaginationDotMobile),
              ...(activeVideo === 0 && styles.videoPaginationDotActive),
              ...(activeVideo === 0 && isMobile && styles.videoPaginationDotActiveMobile),
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setActiveVideo(1);
            }}
            style={{
              ...styles.videoPaginationDot,
              ...(isMobile && styles.videoPaginationDotMobile),
              ...(activeVideo === 1 && styles.videoPaginationDotActive),
              ...(activeVideo === 1 && isMobile && styles.videoPaginationDotActiveMobile),
            }}
          />
        </div>
      </div>
    </Link>
  );
}

function RecommendedProducts({
  products,
  isMobile,
  isTablet,
}: {
  products: Promise<RecommendedProductsQuery | null>;
  isMobile: boolean;
  isTablet: boolean;
}) {
  const productsStyle = {
    ...styles.recommendedProducts,
    ...(isMobile && styles.recommendedProductsMobile),
  };

  const headingStyle = {
    ...styles.indexCategoryHeading,
    ...(isMobile && styles.indexCategoryHeadingMobile),
  };

  const gridStyle = {
    ...styles.recommendedProductsGrid,
    ...(isTablet && styles.recommendedProductsGridTablet),
    ...(isMobile && styles.recommendedProductsGridMobile),
  };

  return (
    <div style={productsStyle}>
      <div style={headingStyle}>
        <text>Recommended Products</text>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div style={gridStyle}>
              {response
                ? response.products.nodes.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 10) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
