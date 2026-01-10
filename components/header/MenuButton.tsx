'use client';

import { Menu } from '@/public/icons/Menu';
import { Close } from '@/components/icons';
import { classes } from '@/lib/utils';
import styles from './MenuButton.module.css';

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export default function MenuButton({ isOpen, onToggle, className }: MenuButtonProps) {
  return (
    <button
      type="button"
      className={classes(styles.navLinkLike, styles.menuButton, className, isOpen && styles.open)}
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span className={styles.bg} aria-hidden="true">
        <span className={styles.bgBase}></span>
        <span className={styles.bgHover}></span>
      </span>
      <span className={styles.content}>
        <span className={styles.iconWrap}>
          <Menu className={styles.iconMenu} />
          <Close className={styles.iconClose} />
        </span>
      </span>
    </button>
  );
}

