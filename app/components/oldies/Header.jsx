import { useState, useEffect } from 'react';
import LogoText from '../assets/images/textLogo.png';
import Logo from '../assets/images/logow.png';
import styles from '../stylesheets/Header.module.scss';

export default function Header() {
  const [condensed, setCondensed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const shouldCondense = scrollY >= 200 ;
          
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
      className={`${styles.headerContainer} ${
        condensed ? styles.condensed : ''
      }`}
    >
      <div className={styles.logoContainer}>
        <img 
          src={condensed ? Logo : LogoText} 
          className={`${styles.textLogo}`}
          alt="Logo" 
        />
      </div>
      
      <nav className={`${styles.navigation} ${condensed ? styles.navigationCondensed : ''}`}>
        <a href="/" className={styles.navLink}>Home</a>
        
        <div className={styles.dropdown}>
          <button 
            className={styles.navLink}
            onClick={() => handleDropdownToggle('pages')}
          >
            Pages
            <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.dropdown}>
          <button 
            className={styles.navLink}
            onClick={() => handleDropdownToggle('components')}
          >
            Components
            <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.dropdown}>
          <button 
            className={styles.navLink}
            onClick={() => handleDropdownToggle('blog')}
          >
            Blog
            <svg className={styles.chevron} width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <a href="/changelog" className={styles.navLink}>
          Changelog
          <span className={styles.newBadge}>New</span>
        </a>
      </nav>
      
      <div className={styles.rightActions}>
        <button className={`${styles.iconButton} ${condensed ? styles.iconHidden : ''}`} aria-label="Toggle theme">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v2M8 13v2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M1 8h2M13 8h2M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        
        <button className={`${styles.iconButton} ${condensed ? styles.iconHidden : ''}`} aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
            <path d="m13 13-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        <button className={styles.purchaseButton}>
          Purchase
          <svg className={styles.arrow} width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
