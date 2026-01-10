'use client';

import styles from './TextButton.module.css';

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function TextButton({ children, className = '', ...rest }: TextButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.button} t-body-16-strong ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

