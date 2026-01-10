import styles from './Button.module.css';

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  children: React.ReactNode;
  size?: 'md' | 'lg';
}

export default function Button({
  children,
  size = 'md',
  type = 'button',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[size]} t-body-16-strong ${className}`}
      {...rest}
    >
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
    </button>
  );
}

