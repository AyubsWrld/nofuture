import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useFetcher } from 'react-router';
import { Image, Money } from '@shopify/hydrogen';
import { urlWithTrackingParams } from '~/lib/search';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [term, setTerm] = useState('');

  // Focus input when modal opens
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Close on Escape or click outside
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  // Fetch predictive search results as user types (debounced)
  useEffect(() => {
    if (!term.trim()) return;

    const timeoutId = setTimeout(() => {
      fetcher.load(`/search?q=${encodeURIComponent(term)}&predictive=true`);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [term, fetcher]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      onClose();
      navigate(`/search?q=${encodeURIComponent(term)}`);
    }
  };

  if (!open) return null;

  const results = fetcher.data?.type === 'predictive' ? fetcher.data.result?.items : null;
  const isLoading = fetcher.state === 'loading';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '8vh',
        overflowY: 'auto',
      }}
    >
      <div
        ref={modalRef}
        style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid #262626',
          borderRadius: '16px',
          width: 'min(92%, 720px)',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          boxShadow: '0 25px 70px rgba(0,0,0,0.8)',
          color: 'white',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: '#8E8E93',
            fontSize: '1.75rem',
            lineHeight: 1,
            cursor: 'pointer',
            padding: 0,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#8E8E93'}
          aria-label="Close search"
        >
          ×
        </button>

        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
            color: 'white',
          }}
        >
          Search
        </h2>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
              marginBottom: '2rem',
            }}
          >
            <div style={{ position: 'relative', flex: 1 }}>
              <input
                ref={inputRef}
                value={term}
                name="q"
                placeholder="Search products, articles, pages..."
                type="search"
                autoComplete="off"
                onChange={(e) => setTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.875rem 1.25rem',
                  fontSize: '0.9375rem',
                  color: '#e0e0e0',
                  backgroundColor: '#141414',
                  border: '1px solid #262626',
                  borderRadius: '10px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = 'white')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#262626')}
              />
              {isLoading && (
                <div
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#8E8E93',
                    fontSize: '0.875rem',
                  }}
                >
                  Searching...
                </div>
              )}
            </div>

            <button
              type="submit"
              style={{
                padding: '0.875rem 1.75rem',
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: 'black',
                backgroundColor: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e5e5e5';
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
        </form>

        {/* Results */}
        <div style={{ marginTop: '1.5rem' }}>
          {!term ? (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                color: '#8E8E93',
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  opacity: 0.3,
                }}
              >
              </div>
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#C7C7CC',
                  marginBottom: '0.5rem',
                }}
              >
                Start typing to search
              </h3>
              <p style={{ fontSize: '0.9375rem' }}>
                Search for products, articles, and pages
              </p>
            </div>
          ) : results ? (
            <>
              {/* Products */}
              {results.products && results.products.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#8E8E93',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Products
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                  >
                    {results.products.slice(0, 5).map((product: any) => {
                      const productUrl = urlWithTrackingParams({
                        baseUrl: `/products/${product.handle}`,
                        trackingParams: product.trackingParameters,
                        term,
                      });
                      const variant = product.selectedOrFirstAvailableVariant;

                      return (
                        <a
                          key={product.id}
                          href={productUrl}
                          onClick={onClose}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.75rem',
                            backgroundColor: '#141414',
                            border: '1px solid #262626',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: 'white',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#1a1a1a';
                            e.currentTarget.style.borderColor = '#3a3a3a';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#141414';
                            e.currentTarget.style.borderColor = '#262626';
                          }}
                        >
                          {variant?.image && (
                            <Image
                              data={variant.image}
                              alt={product.title}
                              width={48}
                              height={48}
                              style={{
                                borderRadius: '6px',
                                objectFit: 'cover',
                              }}
                            />
                          )}
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p
                              style={{
                                fontSize: '0.9375rem',
                                fontWeight: 500,
                                marginBottom: '0.25rem',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap',
                              }}
                            >
                              {product.title}
                            </p>
                            {variant?.price && (
                              <p
                                style={{
                                  fontSize: '0.875rem',
                                  color: '#8E8E93',
                                }}
                              >
                                <Money data={variant.price} />
                              </p>
                            )}
                          </div>
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                            style={{ flexShrink: 0, opacity: 0.5 }}
                          >
                            <path
                              d="M6 3l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Pages */}
              {results.pages && results.pages.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <h3
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#8E8E93',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Pages
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                  >
                    {results.pages.slice(0, 3).map((page: any) => {
                      const pageUrl = urlWithTrackingParams({
                        baseUrl: `/pages/${page.handle}`,
                        trackingParams: page.trackingParameters,
                        term,
                      });

                      return (
                        <a
                          key={page.id}
                          href={pageUrl}
                          onClick={onClose}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.75rem 1rem',
                            backgroundColor: '#141414',
                            border: '1px solid #262626',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: '0.9375rem',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#1a1a1a';
                            e.currentTarget.style.borderColor = '#3a3a3a';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#141414';
                            e.currentTarget.style.borderColor = '#262626';
                          }}
                        >
                          <span>{page.title}</span>
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                            style={{ flexShrink: 0, opacity: 0.5 }}
                          >
                            <path
                              d="M6 3l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Articles */}
              {results.articles && results.articles.length > 0 && (
                <div style={{ marginBottom: '1rem' }}>
                  <h3
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#8E8E93',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Articles
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                  >
                    {results.articles.slice(0, 3).map((article: any) => {
                      const articleUrl = urlWithTrackingParams({
                        baseUrl: `/blogs/${article.blog?.handle || 'news'}/${article.handle}`,
                        trackingParams: article.trackingParameters,
                        term,
                      });

                      return (
                        <a
                          key={article.id}
                          href={articleUrl}
                          onClick={onClose}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0.75rem 1rem',
                            backgroundColor: '#141414',
                            border: '1px solid #262626',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: '0.9375rem',
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#1a1a1a';
                            e.currentTarget.style.borderColor = '#3a3a3a';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#141414';
                            e.currentTarget.style.borderColor = '#262626';
                          }}
                        >
                          <span>{article.title}</span>
                          <svg
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                            style={{ flexShrink: 0, opacity: 0.5 }}
                          >
                            <path
                              d="M6 3l5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* No results */}
              {results.products?.length === 0 &&
                results.pages?.length === 0 &&
                results.articles?.length === 0 && (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '3rem 1rem',
                      color: '#8E8E93',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.125rem',
                        fontWeight: 600,
                        color: '#C7C7CC',
                        marginBottom: '0.5rem',
                      }}
                    >
                      No results found
                    </h3>
                    <p style={{ fontSize: '0.9375rem' }}>
                      Try adjusting your search term
                    </p>
                  </div>
                )}

              {/* View all results link */}
              {term && (results.products?.length > 0 || results.pages?.length > 0 || results.articles?.length > 0) && (
                <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                  <a
                    href={`/search?q=${encodeURIComponent(term)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      navigate(`/search?q=${encodeURIComponent(term)}`);
                    }}
                    style={{
                      display: 'inline-block',
                      padding: '0.75rem 1.5rem',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: 'white',
                      backgroundColor: '#1a1a1a',
                      border: '1px solid #262626',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#262626';
                      e.currentTarget.style.borderColor = '#3a3a3a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1a1a';
                      e.currentTarget.style.borderColor = '#262626';
                    }}
                  >
                    View all results →
                  </a>
                </div>
              )}
            </>
          ) : term && !isLoading ? (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                color: '#8E8E93',
              }}
            >
              <h3
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#C7C7CC',
                  marginBottom: '0.5rem',
                }}
              >
                No results found
              </h3>
              <p style={{ fontSize: '0.9375rem' }}>
                Try adjusting your search term
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
