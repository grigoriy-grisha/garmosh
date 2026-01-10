'use client';

import { Plus, Minus } from '@/components/icons';
import styles from './AccordionItem.module.css';

interface AccordionItemProps {
  id: string;
  title: string;
  description: string;
  open: boolean;
  onToggle: (id: string) => void;
}

export default function AccordionItem({ id, title, description, open, onToggle }: AccordionItemProps) {

  return (
    <div className={styles.item} data-reveal>
      <button
        type="button"
        id={`${id}-trigger`}
        className={`${styles.trigger} ${open ? styles.open : styles.closed}`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => onToggle(id)}
      >
        <div className={styles.header}>
          <h3 className={`t-title-20-semi ${styles.title}`}>{title}</h3>
          <span className={styles.iconWrap}>
            <Plus className={`${styles.icon} ${styles.plus}`} />
            <Minus className={`${styles.icon} ${styles.minus}`} />
          </span>
        </div>

        <div
          id={`${id}-panel`}
          className={`${styles.panel} ${open ? styles.panelOpen : ''}`}
          role="region"
          aria-labelledby={`${id}-trigger`}
        >
          <div className={styles.panelInner}>
            <div className={styles.description}>
              {description
                .split('<br>')
                .filter((block) => block.trim())
                .map((block, index) => (
                  <p
                    key={index}
                    className={`t-body-18 ${styles.paragraph}`}
                    style={{ color: 'var(--text-neutral-black-secondary)' }}
                  >
                    {block.split('\n').map((line, lineIndex, lines) => (
                      <span key={lineIndex}>
                        {line.trim()}
                        {lineIndex < lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

