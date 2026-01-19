import {useState, useEffect} from 'react';
import {useAside} from './Aside';

// Replace with your actual logo imports
const LogoText = '../../public/textLogo.png';
const Logo = '../../public/icon.png';



/* -------------------------------------------------------------
   MAIN HEADER (DESKTOP + MOBILE RESPONSIVE)
-------------------------------------------------------------- */
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
  const {open} = useAside();

  // Fade-in visibility state
  const [visible, setVisible] = useState(false);

  /* Resolve login state */
  useEffect(() => {
    Promise.resolve(isLoggedIn).then(setLoggedIn);
  }, [isLoggedIn]);

  /* Mobile detection */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* Scroll condensing */
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

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Mobile styles
  if (isMobile) {
    return (
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
        {/* Mobile menu button */}
        <button
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
            fontSize: '20px',
            flexShrink: 0,
          }}
          onClick={ () => open('cart')}
        >
          ☰
        </button>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
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
        </div>

        {/* Right side CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginLeft: 'auto',
          }}
        >
          {/* Search */}
          <button
            onClick={ () => open('search')}
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
            }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="m13 13-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Cart */}
          <button
            onClick={() => open('cart')}
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
            }}
          >
            Cart
          </button>
        </div>
      </div>
    );
  }

  // Desktop styles
  return (
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
      <div style={{ display: 'flex', alignItems: 'center', minWidth: 0 }}>
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
      </div>

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
        <a
          href="/"
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
        </a>

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
            <a
              key={item.id}
              href={url}
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
            </a>
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
        {/* Mobile menu */}
        <button
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
          onClick={ () => open('cart')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
          }}
        >
          ☰
        </button>

        {/* Search */}
        <button
          onClick={ () => open('cart') }
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
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="m13 13-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Cart */}
        <button
          onClick={() => open('cart')}
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
          Cart
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   MOBILE MENU
-------------------------------------------------------------- */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const items = menu?.items ?? [];

  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
    }}>
      {items.map((item) => {
        if (!item.url) return null;

        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;

        return (
          <a
            key={item.id}
            href={url}
            style={{
              fontSize: '18px',
              color: 'white',
              fontWeight: '600',
              textDecoration: 'none',
            }}
          >
            {item.title}
          </a>
        );
      })}
    </nav>
  );
}

