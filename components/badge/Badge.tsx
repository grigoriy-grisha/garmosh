import Image from 'next/image';
import styles from './Badge.module.css';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  iconSrc?: string;
  iconAlt?: string;
  variant?: 'brand' | 'neutral';
}

export default function Badge({ label, iconSrc, iconAlt = 'Icon', variant = 'brand', ...rest }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${variant === 'neutral' ? styles.badgeNeutral : ''}`} {...rest}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={20}
          height={20}
          className={styles.icon}
        />
      )}
      <span className={`${styles.label} t-body-16`}>{label}</span>
    </span>
  );
}

