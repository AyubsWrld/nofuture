import {Await, Link} from 'react-router';
import {Suspense, useId, useState} from 'react';
import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import {Aside} from '~/components/Aside';
import {Footer} from '~/components/Footer';
import {Header, HeaderMenu} from '~/components/Header';
import {CartMain} from '~/components/CartMain';
import {
  SEARCH_ENDPOINT,
  SearchFormPredictive,
} from '~/components/SearchFormPredictive';
import {SearchResultsPredictive} from '~/components/SearchResultsPredictive';
import {Newsletter} from '../components/Newsletter';

interface PageLayoutProps {
  cart: Promise<CartApiQueryFragment | null>;
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
  hasPreviewAccess: boolean;
  children?: React.ReactNode;
}

interface PreviewCardProps {
  password: string;
  setPassword: (password: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
}

const PREVIEW_PASSWORD = 'preview123';

function PreviewCard({ password, setPassword, handleSubmit, error }: PreviewCardProps) {
  const [activeVideo, setActiveVideo] = useState(0);
  
  const videos = [
    "/videos/Comp.mp4",
  ];

  return (
    <div className="preview-page">
      <div className="preview-container">
        <div className="preview-row-one">
          <div className="preview-card">
            <div className="preview-logo-container">
              <div className="preview-logo-wrapper">
                <div className="preview-logo-circle">
                  <img
                    src="/icon.png"
                    alt="Logo"
                    className="preview-logo"
                  />
                </div>
              </div>
            </div>
            <h1 className="preview-heading">
              We aren't open yet
            </h1>
            
            <p className="preview-description">
              If you were given a password to preview the website with please enter it below.
            </p>
            <form onSubmit={handleSubmit} className="preview-form">
              <div className="preview-form-group">
                <label htmlFor="password" className="preview-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Nofuture123"
                  className="preview-input"
                />
                {error && <p className="preview-error">{error}</p>}
              </div>
              <button type="submit" className="preview-submit">
                Enter
              </button>
            </form>
            <div className="preview-divider">Or</div>
            <button type="button" className="preview-notify">
              Notify Me
            </button>
          </div>
        </div>
        <div className="preview-row-two">
          <div className="preview-content-placeholder">
            <video
              className={`preview-video ${activeVideo === 0 ? 'active' : 'inactive'}`}
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
            >
              <source src={videos[0]} type="video/mp4" />
            </video>
            
            {videos[1] && (
              <video
                className={`preview-video ${activeVideo === 1 ? 'active' : 'inactive'}`}
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
              >
                <source src={videos[1]} type="video/mp4" />
              </video>
            )}
            {videos.length > 1 && (
              <div className="preview-video-pagination">
                <div className="preview-video-pagination-container">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveVideo(index);
                      }}
                      className={`preview-video-pagination-dot ${activeVideo === index ? 'active' : ''}`}
                      aria-label={`View video ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewGate() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('password', password);
    
    const response = await fetch('/preview', {
      method: 'POST',
      body: formData,
    });
    
    if (response.ok) {
      window.location.href = '/';
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div>
      <PreviewCard 
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        error={error}
      /> 
    </div>
  );
}

export function PageLayout({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn,
  publicStoreDomain,
  hasPreviewAccess,
}: PageLayoutProps) {

  if (!hasPreviewAccess) {
    return <PreviewGate />;
  }

  // Otherwise, render the normal layout
  return (
    <>
      <div className="page-layout-container">
        <Aside.Provider>
          <CartAside cart={cart} />
          <Newsletter/> 
          <SearchAside />
          <MobileMenuAside header={header} publicStoreDomain={publicStoreDomain} />
          {header && (
            <Header
              header={header}
              cart={cart}
              isLoggedIn={isLoggedIn}
              publicStoreDomain={publicStoreDomain}
            />
          )}
          <main className="main-content">{children}</main>
          <Footer
            footer={footer}
            header={header}
            publicStoreDomain={publicStoreDomain}
          />
        </Aside.Provider>
      </div>
      <style>{pageLayoutStyles}</style>
    </>
  );
}

function CartAside({cart}: {cart: PageLayoutProps['cart']}) {
  return (
    <Aside type="cart" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}

function SearchAside() {
  const queriesDatalistId = useId();
  return (
    <Aside type="search" heading="SEARCH">
      <div className="predictive-search">
        <br />
        <SearchFormPredictive>
          {({fetchResults, goToSearch, inputRef}) => (
            <>
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
                list={queriesDatalistId}
              />
              &nbsp;
              <button onClick={goToSearch}>Search</button>
            </>
          )}
        </SearchFormPredictive>

        <SearchResultsPredictive>
          {({items, total, term, state, closeSearch}) => {
            const {articles, collections, pages, products, queries} = items;

            if (state === 'loading' && term.current) {
              return <div>Loading...</div>;
            }

            if (!total) {
              return <SearchResultsPredictive.Empty term={term} />;
            }

            return (
              <>
                <SearchResultsPredictive.Queries
                  queries={queries}
                  queriesDatalistId={queriesDatalistId}
                />
                <SearchResultsPredictive.Products
                  products={products}
                  closeSearch={closeSearch}
                  term={term}
                />
                <SearchResultsPredictive.Collections
                  collections={collections}
                  closeSearch={closeSearch}
                  term={term}
                />
                <SearchResultsPredictive.Pages
                  pages={pages}
                  closeSearch={closeSearch}
                  term={term}
                />
                <SearchResultsPredictive.Articles
                  articles={articles}
                  closeSearch={closeSearch}
                  term={term}
                />
                {term.current && total ? (
                  <Link
                    onClick={closeSearch}
                    to={`${SEARCH_ENDPOINT}?q=${term.current}`}
                  >
                    <p>
                      View all results for <q>{term.current}</q>
                      &nbsp; →
                    </p>
                  </Link>
                ) : null}
              </>
            );
          }}
        </SearchResultsPredictive>
      </div>
    </Aside>
  );
}

function MobileMenuAside({
  header,
  publicStoreDomain,
}: {
  header: PageLayoutProps['header'];
  publicStoreDomain: PageLayoutProps['publicStoreDomain'];
}) {
  return (
    header.menu &&
    header.shop.primaryDomain?.url && (
      <Aside type="mobile" heading="MENU">
        <HeaderMenu
          menu={header.menu}
          viewport="mobile"
          primaryDomainUrl={header.shop.primaryDomain.url}
          publicStoreDomain={publicStoreDomain}
        />
      </Aside>
    )
  );
}

const pageLayoutStyles = `
  .page-layout-container {
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  .main-content {
    width: 100%;
    max-width: 100%;
    flex: 1;
    box-sizing: border-box;
  }

  /* Ensure all child elements respect container width */
  .page-layout-container * {
    box-sizing: border-box;
  }

  /* Mobile-first responsive breakpoints */
  @media (max-width: 640px) {
    .page-layout-container {
      padding: 0;
    }
    
    .main-content {
      padding: 0;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .page-layout-container {
      padding: 0;
    }
  }

  @media (min-width: 1025px) {
    .page-layout-container {
      padding: 0;
    }
  }
`;
