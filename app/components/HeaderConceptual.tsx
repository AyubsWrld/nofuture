import { useState, useEffect } from 'react';
import LogoText from '../../public/textLogo.png';
import Logo from '../../public/logow.png';

export default function Header() {
  const [condensed, setCondensed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const shouldCondense = scrollY >= 200;
          
          if (shouldCondense !== condensed) {
            setCondensed(shouldCondense);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [condensed]);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div
      className="sticky top-8 z-50 flex flex-row justify-between items-center mx-auto backdrop-blur-xl bg-black/95 border-2 border-zinc-800 transition-all duration-500 ease-out"
      style={{
        width: condensed ? '675px' : '1200px',
        minWidth: condensed ? '675px' : '750px',
        height: '60px',
        padding: '0 20px',
        borderRadius: condensed ? '999px' : '8px'
      }}
    >
      {/* Logo Container */}
      <div className="flex items-center min-w-0">
        <img 
          src={condensed ? Logo : LogoText} 
          className="h-6 mr-3 object-contain transition-all duration-500 ease-out"
          alt="Logo" 
        />
      </div>
      
      {/* Navigation */}
      <nav className="flex items-center transition-all duration-500 ease-out" style={{
        marginLeft: condensed ? '24px' : '40px',
        gap: condensed ? '24px' : '32px',
        transform: condensed ? 'translateX(-12px)' : 'translateX(0)'
      }}>
        <a href="/" className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm font-semibold transition-all duration-500 ease-out hover:-translate-y-0.5 whitespace-nowrap">
          Home
        </a>
        
        <div className="relative">
          <button 
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm font-semibold transition-all duration-500 ease-out hover:-translate-y-0.5 bg-none border-none cursor-pointer"
            onClick={() => handleDropdownToggle('pages')}
          >
            Pages
            <svg className="w-3 h-3 text-zinc-400 group-hover:text-white transition-all duration-500 ease-out group-hover:rotate-180" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="relative">
          <button 
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm font-semibold transition-all duration-500 ease-out hover:-translate-y-0.5 bg-none border-none cursor-pointer"
            onClick={() => handleDropdownToggle('components')}
          >
            Components
            <svg className="w-3 h-3 text-zinc-400 group-hover:text-white transition-all duration-500 ease-out group-hover:rotate-180" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="relative">
          <button 
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm font-semibold transition-all duration-500 ease-out hover:-translate-y-0.5 bg-none border-none cursor-pointer"
            onClick={() => handleDropdownToggle('blog')}
          >
            Blog
            <svg className="w-3 h-3 text-zinc-400 group-hover:text-white transition-all duration-500 ease-out group-hover:rotate-180" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <a href="/changelog" className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm font-semibold transition-all duration-500 ease-out hover:-translate-y-0.5 whitespace-nowrap">
          Changelog
          <span className="text-white/70 text-xs font-semibold px-1.5 py-0.5 border border-zinc-700 rounded-sm uppercase tracking-wide">
            New
          </span>
        </a>
      </nav>
      
      {/* Right Actions */}
      <div className="flex items-center gap-3 ml-auto transition-all duration-500 ease-out" style={{
        gap: condensed ? '8px' : '12px'
      }}>
        <button 
          className="flex items-center justify-center w-9 h-9 bg-none border-none text-zinc-400 hover:text-white hover:bg-white/5 cursor-pointer rounded transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-105"
          style={{
            transform: condensed ? 'scale(0.8) translateX(20px)' : 'scale(1)',
            width: condensed ? '0' : '36px',
            overflow: 'hidden',
            pointerEvents: condensed ? 'none' : 'auto'
          }}
          aria-label="Toggle theme"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v2M8 13v2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M1 8h2M13 8h2M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        
        <button 
          className="flex items-center justify-center w-9 h-9 bg-none border-none text-zinc-400 hover:text-white hover:bg-white/5 cursor-pointer rounded transition-all duration-500 ease-out hover:-translate-y-0.5 hover:scale-105"
          style={{
            transform: condensed ? 'scale(0.8) translateX(20px)' : 'scale(1)',
            width: condensed ? '0' : '36px',
            overflow: 'hidden',
            pointerEvents: condensed ? 'none' : 'auto'
          }}
          aria-label="Search"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="m13 13-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <button 
          className="flex items-center gap-1.5 bg-white text-black border-none cursor-pointer whitespace-nowrap transition-all duration-500 ease-out hover:bg-zinc-100 hover:shadow-lg font-semibold"
          style={{
            padding: condensed ? '6px 12px' : '8px 16px',
            borderRadius: condensed ? '999px' : '6px',
            fontSize: condensed ? '13px' : '14px'
          }}
        >
          Purchase
          <svg className="w-3 h-3 text-black transition-transform duration-500 ease-out" viewBox="0 0 12 12" fill="none">
            <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
