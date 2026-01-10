import { Check } from '@/components/icons';
import styles from './OfferCard.module.css';

interface PriceItem {
  value: string;
  suffix?: string;
  description?: string;
}

interface OfferCardProps {
  title: string;
  features: string[];
  prices: PriceItem[];
  bottomNote: string;
}

export default function OfferCard({
  title,
  features,
  prices,
  bottomNote,
}: OfferCardProps) {
  return (
    <div className={styles.card} data-reveal>
      <div className={styles.content}>
        <h3 className={`t-heading-24 ${styles.title}`}>{title}</h3>

        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index} className={styles.featureRow}>
              <Check className={styles.checkIcon} />
              <span className="t-body-16">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.prices}>
        <div className={styles.priceRow}>
          {prices.map((price, index) => (
            <div key={index} className={styles.priceBlock}>
              <div className={styles.priceLine}>
                <span className="t-display-40-semi">{price.value}</span>
                {price.suffix && <span className="t-body-16">{price.suffix}</span>}
              </div>
              {price.description && (
                <p className={`t-body-16 ${styles.priceDescription}`} style={{ color: 'var(--text-neutral-black-disabled)' }}>
                  {price.description}
                </p>
              )}
            </div>
          ))}
        </div>
        {bottomNote && <p className={`t-body-16 ${styles.bottomNote}`}>{bottomNote}</p>}
      </div>
    </div>
  );
}

