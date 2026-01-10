import Button from '@/components/button/Button';
import styles from './ProblemStepCard.module.css';

type ProblemStepCardProps =
  | { variant: 'step'; step: string; text: string }
  | { variant: 'cta'; ctaLabel: string };

export default function ProblemStepCard(props: ProblemStepCardProps) {
  if (props.variant === 'step') {
    return (
      <div className={`${styles.card} ${styles.cardStep}`} data-reveal>
        <div className={styles.content}>
          <div className="t-display-64" style={{ color: 'var(--text-neutral-black-disabled)' }}>
            {props.step}
          </div>
          <p className="t-title-20-semi" style={{ margin: 0 }}>
            {props.text}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.card} ${styles.cardCta}`} data-reveal>
      <a href="https://t.me/garmashdd" target="_blank" rel="noopener noreferrer">
        <Button size="lg">{props.ctaLabel}</Button>
      </a>
    </div>
  );
}

