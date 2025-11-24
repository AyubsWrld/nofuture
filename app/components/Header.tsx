import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import LogoText from '../../public/textLogo.png';
import Logo from '../../public/logow.png';

/* -------------------------------------------------------------
   Drawer stubs — replace with real Aside logic later
-------------------------------------------------------------- */
function openMobileMenu() {
  console.log("Open mobile menu drawer");
}
function openSearch() {
  console.log("Open search drawer");
}
function openCart() {
  console.log("Open cart drawer");
}

/* -------------------------------------------------------------
   ACTIVE LINK STYLING — Hydrogen-like behavior
-------------------------------------------------------------- */
export function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : undefined,
  };
}

/* -------------------------------------------------------------
   MAIN HEADER (DESKTOP)
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

  /* Resolve login state */
  useEffect(() => {
    Promise.resolve(isLoggedIn).then(setLoggedIn);
  }, [isLoggedIn]);

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

  return (
    <div
      className="sticky top-8 z-50 flex flex-row justify-between items-center mx-auto backdrop-blur-xl bg-black/95 border-2 border-zinc-800 transition-all duration-500 ease-out"
      style={{
        width: condensed ? '675px' : '1200px',
        minWidth: condensed ? '675px' : '750px',
        height: '60px',
        padding: '0 20px',
        borderRadius: condensed ? '999px' : '8px',
      }}
    >
      {/* Logo */}
      <div className="flex items-center min-w-0">
        <img
          src={condensed ? Logo : LogoText}
          className="h-6 mr-3 object-contain transition-all duration-500 ease-out"
          alt="Logo"
        />
      </div>

      {/* Desktop nav */}
      <nav
        className="flex items-center transition-all duration-500 ease-out"
        style={{
          marginLeft: condensed ? '24px' : '40px',
          gap: condensed ? '24px' : '32px',
          transform: condensed ? 'translateX(-12px)' : 'translateX(0)',
        }}
      >
        {/* HOME */}
        <NavLink
          to="/"
          end
          className="flex items-center gap-1.5 text-white hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5 whitespace-nowrap"
        >
          Home
        </NavLink>

        {/* SHOPIFY MENU ITEMS */}
        {menu.map((item) => {
          if (!item.url) return null;

          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain) ||
            item.url.includes(primaryDomainUrl)
              ? new URL(item.url).pathname
              : item.url;

          return (
            <NavLink
              key={item.id}
              to={url}
              end
              className="flex items-center gap-1.5 text-white hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              {item.title}
            </NavLink>
          );
        })}
      </nav>

      {/* Right side CTAs */}
      <div
        className="flex items-center ml-auto transition-all duration-500 ease-out"
        style={{gap: condensed ? '8px' : '12px'}}
      >
        {/* Mobile menu toggle */}
        <button
          className="flex items-center justify-center w-9 h-9 bg-none border-none text-white hover:text-white hover:bg-white/5 rounded hover:-translate-y-0.5 hover:scale-105"
          onClick={openMobileMenu}
        >
          ☰
        </button>

        {/* Account */}
        <NavLink
          to="/account"
          className="text-white hover:text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
        >
          {loggedIn ? "Account" : "Sign in"}
        </NavLink>

        {/* Search */}
        <button
          onClick={openSearch}
          className="flex items-center justify-center w-9 h-9 bg-none border-none text-white hover:text-white hover:bg-white/5 rounded hover:-translate-y-0.5 hover:scale-105"
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="m13 13-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Cart */}
        <button
          onClick={openCart}
          className="flex items-center justify-center w-9 h-9 bg-none border-none text-white hover:text-white hover:bg-white/5 rounded hover:-translate-y-0.5 hover:scale-105 relative"
        >
          Cart
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
   MOBILE MENU (ASIDE)
-------------------------------------------------------------- */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const items = menu?.items ?? [];

  return (
    <nav className="flex flex-col gap-4 p-4">
      {items.map((item) => {
        if (!item.url) return null;

        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;

        return (
          <NavLink
            key={item.id}
            to={url}
            end
            className="text-lg text-white hover:text-white font-semibold"
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
