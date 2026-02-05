import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useAside } from './Aside';
import { Search, ShoppingCart } from 'lucide-react'; 

const LogoText = '/textLogo.png';
const Logo = '/icon.png';
import { SearchModal } from '~/components/SearchModal';

export function Header({
  header,
  cart,
  isLoggedIn,
  publicStoreDomain,
}) {
  const menu = header?.menu?.items ?? [];
  const primaryDomainUrl = header?.shop?.primaryDomain?.url ?? '';
  const [loggedIn, setLoggedIn] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { open } = useAside();
  const [visible, setVisible] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    Promise.resolve(isLoggedIn).then(setLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const shouldCondense = window.scrollY >= 200;
          setCondensed(shouldCondense);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (isMobile) {
    return (
      <>
        <div
          style={{
            position: 'fixed',
            top: '8px',
            left: '16px',
            right: '16px',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 auto',
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            border: '2px solid rgb(39, 39, 42)',
            transitionProperty: 'all',
            transitionDuration: '500ms',
            transitionTimingFunction: 'ease-out',
            height: '60px',
            padding: '0 16px',
            borderRadius: '999px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0px)' : 'translateY(-12px)',
            transition: 'all 0.6s ease-out',
          }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSearchModalOpen(true);
            }}
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
              flexShrink: 0,
            }}
          >
            <Search size={20} strokeWidth={1.8} /> {/* ← Lucide Search icon */}
          </button>

          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              textDecoration: 'none',
            }}
          >
            <img
              src={Logo}
              style={{
                height: '24px',
                objectFit: 'contain',
                transitionProperty: 'all',
                transitionDuration: '500ms',
                transitionTimingFunction: 'ease-out',
              }}
              alt="Logo"
            />
          </Link>

          {/* Cart button on right */}
          <button
            onClick={() => open('cart')}
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
              position: 'relative',
              fontSize: '12px',
              fontWeight: '600',
              marginLeft: 'auto',
            }}
          >
            <ShoppingCart size={20} strokeWidth={1.8} /> {/* ← Lucide ShoppingCart icon */}
          </button>
        </div>

        {/* The modal */}
        <SearchModal
          open={searchModalOpen}
          onClose={() => setSearchModalOpen(false)}
        />
      </>
    );
  }

  // Desktop styles
  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '32px',
          left: '50%',
          transform: `translateX(-50%) ${visible ? 'translateY(0px)' : 'translateY(-12px)'}`,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 auto',
          backdropFilter: 'blur(16px)',
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          border: '2px solid rgb(39, 39, 42)',
          transitionProperty: 'all',
          transitionDuration: '500ms',
          transitionTimingFunction: 'ease-out',
          width: condensed ? '675px' : '1200px',
          minWidth: condensed ? '675px' : '750px',
          height: '60px',
          padding: '0 20px',
          borderRadius: condensed ? '999px' : '8px',
          opacity: visible ? 1 : 0,
          transition: 'all 0.6s ease-out',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            minWidth: 0,
            textDecoration: 'none',
          }}
        >
          <img
            src={condensed ? Logo : LogoText}
            style={{
              height: '24px',
              marginRight: '12px',
              objectFit: 'contain',
              transitionProperty: 'all',
              transitionDuration: '500ms',
              transitionTimingFunction: 'ease-out',
            }}
            alt="Logo"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            transitionProperty: 'all',
            transitionDuration: '500ms',
            transitionTimingFunction: 'ease-out',
            marginLeft: condensed ? '24px' : '40px',
            gap: condensed ? '24px' : '32px',
            transform: condensed ? 'translateX(-12px)' : 'translateX(0)',
          }}
        >
          {/* HOME */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'white',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
            }}
          >
            Home
          </Link>

          {/* Shopify menu items */}
          {menu.map((item) => {
            if (!item.url) return null;
            const url =
              item.url.includes('myshopify.com') ||
              item.url.includes(publicStoreDomain) ||
              item.url.includes(primaryDomainUrl)
                ? new URL(item.url).pathname
                : item.url;
            return (
              <Link
                key={item.id}
                to={url}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                }}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right side CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
            transitionProperty: 'all',
            transitionDuration: '500ms',
            transitionTimingFunction: 'ease-out',
            gap: condensed ? '8px' : '12px',
          }}
        >
          {/* Search */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSearchModalOpen(true);
            }}
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <Search size={20} strokeWidth={1.8} /> {/* ← Lucide Search icon */}
          </button>

          {/* Cart */}
          <button
            onClick={() => open('cart')}
            type="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              borderRadius: '4px',
              position: 'relative',
              transition: 'all 0.2s',
              fontSize: '12px',
              fontWeight: '600',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
          >
            <ShoppingCart size={20} strokeWidth={1.8} /> {/* ← Lucide ShoppingCart icon */}
          </button>
        </div>
      </div>

      {/* The search modal – appears on both mobile & desktop */}
      <SearchModal
        open={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const items = menu?.items ?? [];
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      {items.map((item) => {
        if (!item.url) return null;
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <Link
            key={item.id}
            to={url}
            style={{
              fontSize: '18px',
              color: 'white',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
