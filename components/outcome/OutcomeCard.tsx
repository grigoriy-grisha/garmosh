import styles from './OutcomeCard.module.css';

interface OutcomeCardProps {
  iconSrc?: string;
  imageSrc?: string;
  number?: number;
  title: string;
  description: string;
}

export default function OutcomeCard({
  iconSrc,
  imageSrc,
  number,
  title,
  description,
}: OutcomeCardProps) {
  return (
    <div className={`${styles.card} ${imageSrc ? styles.cardWithImage : ''}`} role="listitem" data-reveal>
      {number !== undefined ? (
        <span className={`${styles.number} t-heading-24`} style={{ color: 'var(--text-brand-default)' }}>
          {String(number).padStart(2, '0')}
        </span>
      ) : imageSrc ? (
        <img className={styles.image} src={imageSrc} alt="" />
      ) : iconSrc ? (
        <img className={styles.icon} src={iconSrc} alt="" />
      ) : null}
      <div className={styles.text}>
        <h3 className={`${styles.title} t-title-20-semi`}>{title}</h3>
        <p className={`${styles.description} t-body-16`}>{description}</p>
      </div>
    </div>
  );
}

