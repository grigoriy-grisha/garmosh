'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useNavScroll } from './Header';
import { classes } from '@/lib/utils';
import styles from './HeaderNavLink.module.css';

interface HeaderNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

export default function HeaderNavLink({ href, children, onClick, variant = 'desktop' }: HeaderNavLinkProps) {
  const { lockHeaderForAnchorScroll } = useNavScroll();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    
    if (variant === 'mobile') {
      return;
    }
    
    if (href.startsWith('/#')) {
      e.preventDefault();
      const anchorId = href.substring(2);
      
      lockHeaderForAnchorScroll(1500);
      
      const scrollToAnchor = () => {
        const element = document.getElementById(anchorId);
        if (element) {
          const headerOffset = 0;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          return true;
        }
        return false;
      };

      if (pathname === '/') {
        scrollToAnchor();
      } else {
        router.push('/');
        const attemptScroll = (attempts = 0) => {
          if (attempts > 20) return;
          if (!scrollToAnchor()) {
            setTimeout(() => attemptScroll(attempts + 1), 100);
          }
        };
        setTimeout(() => attemptScroll(), 100);
      }
    }
  };

  if (variant === 'mobile') {
    return (
      <Link href={href} onClick={handleClick} className={classes(styles.linkBase, styles.mobile, 't-title-20-medium')}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={classes(styles.linkBase, styles.desktop, 't-body-16-medium')}>
      <span className={styles.bg} aria-hidden="true">
        <span className={styles.bgBase}></span>
        <span className={styles.bgHover}></span>
      </span>

      <span className={styles.content}>
        <span className={styles.label}>
          <span className={styles.labelInner}>
            <span className={styles.labelPrimary}>{children}</span>
            <span className={styles.labelHover}>{children}</span>
          </span>
        </span>
      </span>
    </Link>
  );
}

