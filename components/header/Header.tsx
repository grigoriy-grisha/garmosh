'use client';

import { useEffect, useRef, useState, createContext, useContext, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/button/Button';
import HeaderNavLink from './HeaderNavLink';
import MenuButton from './MenuButton';
import { classes } from '@/lib/utils';
import styles from './Header.module.css';

interface NavScrollContextType {
  lockHeaderForAnchorScroll: (durationMs?: number) => void;
}

const NavScrollContext = createContext<NavScrollContextType | null>(null);

export const useNavScroll = () => {
  const context = useContext(NavScrollContext);
  if (!context) {
    throw new Error('useNavScroll must be used within Header');
  }
  return context;
};

export default function Header() {
  const [isLeftHidden, setIsLeftHidden] = useState(false);
  const [isIntro, setIsIntro] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAnchorScrollRef = useRef(false);
  const isUserScrollRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const anchorScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const anchorScrollCheckIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pathname = usePathname();

  const lockHeaderForAnchorScroll = useCallback((durationMs: number = 1500) => {
    if (anchorScrollTimeoutRef.current) {
      clearTimeout(anchorScrollTimeoutRef.current);
    }
    if (anchorScrollCheckIntervalRef.current) {
      clearInterval(anchorScrollCheckIntervalRef.current);
    }

    isAnchorScrollRef.current = true;
    setIsLeftHidden(false);

    let lastCheckY = window.scrollY;
    let stableCount = 0;

    anchorScrollCheckIntervalRef.current = setInterval(() => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastCheckY) < 1) {
        stableCount++;
        if (stableCount >= 3) {
          if (anchorScrollCheckIntervalRef.current) {
            clearInterval(anchorScrollCheckIntervalRef.current);
            anchorScrollCheckIntervalRef.current = null;
          }
          isAnchorScrollRef.current = false;
          lastScrollYRef.current = currentY;
        }
      } else {
        stableCount = 0;
        lastCheckY = currentY;
      }
    }, 100);

    anchorScrollTimeoutRef.current = setTimeout(() => {
      if (anchorScrollCheckIntervalRef.current) {
        clearInterval(anchorScrollCheckIntervalRef.current);
        anchorScrollCheckIntervalRef.current = null;
      }
      isAnchorScrollRef.current = false;
      lastScrollYRef.current = window.scrollY;
    }, durationMs);
  }, []);

  useEffect(() => {
    setIsIntro(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const mq = '(max-width: 720px)';
    const mql = window.matchMedia(mq);

    const handler = (e: MediaQueryListEvent) => {
      if (!e.matches) {
        setIsMenuOpen(false);
      }
    };

    if (!mql.matches) {
      setIsMenuOpen(false);
    }

    mql.addEventListener('change', handler);

    return () => {
      mql.removeEventListener('change', handler);
    };
  }, []);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleWheel = () => {
      isUserScrollRef.current = true;
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
      userScrollTimeoutRef.current = setTimeout(() => {
        isUserScrollRef.current = false;
      }, 150);
    };

    const handleTouchStart = () => {
      isUserScrollRef.current = true;
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
    };

    const handleTouchMove = () => {
      isUserScrollRef.current = true;
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
    };

    const handleTouchEnd = () => {
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
      userScrollTimeoutRef.current = setTimeout(() => {
        isUserScrollRef.current = false;
      }, 1000);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', 'Space'];
      if (scrollKeys.includes(e.key)) {
        isUserScrollRef.current = true;
        if (userScrollTimeoutRef.current) {
          clearTimeout(userScrollTimeoutRef.current);
        }
        userScrollTimeoutRef.current = setTimeout(() => {
          isUserScrollRef.current = false;
        }, 150);
      }
    };

    const onScroll = () => {
      if (document.documentElement.dataset.lightboxOpen === 'true') return;

      if (isAnchorScrollRef.current) {
        lastScrollYRef.current = window.scrollY;
        return;
      }

      const y = window.scrollY;
      
      if (y <= 10) {
        setIsLeftHidden(false);
        lastScrollYRef.current = y;
        return;
      }

      const delta = y - lastScrollYRef.current;
      
      if (Math.abs(delta) < 1) {
        return;
      }

      lastScrollYRef.current = y;

      if (delta > 0) {
        setIsLeftHidden(true);
      } else {
        setIsLeftHidden(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('keydown', handleKeyDown, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
      if (anchorScrollTimeoutRef.current) {
        clearTimeout(anchorScrollTimeoutRef.current);
      }
      if (anchorScrollCheckIntervalRef.current) {
        clearInterval(anchorScrollCheckIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.documentElement.dataset.lightboxOpen !== 'true') {
        lastScrollYRef.current = window.scrollY;
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lightbox-open'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLogoClick = () => {
    setIsMenuOpen(false);

    if (pathname === '/') {
      lockHeaderForAnchorScroll(700);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavScrollContext.Provider value={{ lockHeaderForAnchorScroll }}>
      <header className={`${styles.header} ${styles.headerIntroBase} ${isIntro ? styles.headerIntroOn : ''}`}>
        <div className={styles.headerInner}>
          <div className={`${styles.headerLeft} ${isLeftHidden ? styles.isHidden : ''}`}>
            <Link href="/" onClick={handleLogoClick}>
              <img src="/logo.svg" alt="Logo" className={styles.logo} />
            </Link>
            <nav className={styles.nav}>
              <div className={`${styles.navList} ${styles.navDesktop}`}>
                <HeaderNavLink href="/#cases">Кейсы</HeaderNavLink>
                <HeaderNavLink href="/#reviews">Отзывы</HeaderNavLink>
                <HeaderNavLink href="/#pricing">Цены</HeaderNavLink>
                <HeaderNavLink href="/#faq">FAQ</HeaderNavLink>
              </div>
              <MenuButton
                isOpen={isMenuOpen}
                onToggle={() => setIsMenuOpen(v => !v)}
              />
            </nav>
          </div>
          <div className={styles.headerRight}>
            <a href="https://t.me/garmashdd" target="_blank" rel="noopener noreferrer" className={styles.tgButton}>
              <Button>Написать в тг</Button>
            </a>
          </div>
        </div>
        {isMenuOpen && typeof document !== 'undefined' && createPortal(
          <div className={styles.overlay} role="dialog" aria-modal="true">
            <div className={styles.mobileMenuContent}>
              <HeaderNavLink variant="mobile" href="/#cases" onClick={() => setIsMenuOpen(false)}>Кейсы</HeaderNavLink>
              <HeaderNavLink variant="mobile" href="/#reviews" onClick={() => setIsMenuOpen(false)}>Отзывы</HeaderNavLink>
              <HeaderNavLink variant="mobile" href="/#pricing" onClick={() => setIsMenuOpen(false)}>Цены</HeaderNavLink>
              <HeaderNavLink variant="mobile" href="/#faq" onClick={() => setIsMenuOpen(false)}>FAQ</HeaderNavLink>
            </div>
            <div className={styles.mobileMenuCredit}>
              <p className={`t-caption-14 ${styles.creditText}`}>
                Сайт разработан{' '}
                <a className={styles.credit} href="https://t.me/yajevladimir" target="_blank" rel="noopener noreferrer">
                  @yajevladimir
                </a>
              </p>
            </div>
          </div>,
          document.body
        )}
      </header>
    </NavScrollContext.Provider>
  );
}

