'use client';

import TextButton from '@/components/textButton/TextButton';
import { useLightbox } from '@/components/lightbox';
import styles from './ReviewCard.module.css';

interface ReviewCardProps {
  name: string;
  text: string;
  disabled?: boolean;
  originalImage?: string;
}

export default function ReviewCard({ name, text, disabled = false, originalImage }: ReviewCardProps) {
  const { openLightbox } = useLightbox();

  const handleViewOriginal = () => {
    if (originalImage) {
      openLightbox([originalImage], 0, "Оригинал отзыва");
    }
  };

  return (
    <div className={styles.card} data-reveal>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className="t-title-20-semi">{name}</div>
          <p className={`t-body-16 ${styles.paragraph}`} style={{ color: 'var(--text-neutral-black-secondary)' }}>
            {text}
          </p>
        </div>
        <TextButton disabled={disabled} onClick={handleViewOriginal}>
          Смотреть оригинал
        </TextButton>
      </div>
    </div>
  );
}

