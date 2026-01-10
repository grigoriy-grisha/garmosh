import styles from './NumberCard.module.css';

interface NumberCardProps {
  number: string;
  description: string;
}

export default function NumberCard({ number, description }: NumberCardProps) {
  return (
    <div className={styles.card} data-reveal>
      <div className={`${styles.number} t-display-64`}>{number}</div>
      <p className={`${styles.description} t-title-20`}>{description}</p>
    </div>
  );
}
