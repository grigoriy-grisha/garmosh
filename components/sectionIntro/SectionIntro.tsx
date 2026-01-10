import Badge from '@/components/badge/Badge';
import styles from './SectionIntro.module.css';

interface SectionIntroProps {
  badgeText: string;
  badgeIconSrc?: string;
  heading: string;
  paragraph?: string;
  headingClassName: string;
  paragraphClassName?: string;
  paragraphColorVar?: string;
  align?: 'left' | 'right';
  paragraphMaxWidth?: string;
  paragraphMarginRight?: string;
}

export default function SectionIntro({
  badgeText,
  badgeIconSrc,
  heading,
  paragraph,
  headingClassName,
  paragraphClassName,
  paragraphColorVar,
  align = 'left',
}: SectionIntroProps) {
  const paragraphStyle: React.CSSProperties = {};
  if (paragraphColorVar) {
    paragraphStyle.color = `var(${paragraphColorVar})`;
  }

  return (
    <div className={styles.intro}>
      <Badge label={badgeText} iconSrc={badgeIconSrc} data-reveal />
      <div className={`${styles.text} ${styles[align]}`}>
        <h2 className={`${headingClassName} ${styles.heading}`} data-reveal>{heading}</h2>
        {paragraph && paragraphClassName && (
          <div className={styles.paragraphContainer}>
            <p
              className={`${paragraphClassName} ${styles.paragraph}`}
              style={paragraphStyle}
              data-reveal
            >
              {paragraph}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

