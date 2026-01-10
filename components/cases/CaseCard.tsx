'use client';

import { useState, useId, useRef, KeyboardEvent } from 'react';
import Image from 'next/image';
import TextButton from '@/components/textButton/TextButton';
import { useLightbox } from '@/components/lightbox';
import styles from './CaseCard.module.css';

interface CaseCardProps {
  avatarSrc: string;
  name: string;
  username: string;
  instagramUrl: string;
  startItems: string[];
  resultItems: string[];
  disabled?: boolean;
  resultBadgeText?: string;
  resultImages?: string[];
}

function CaseBulletList({ items, variant }: { items: string[]; variant: 'start' | 'result' }) {
  return (
    <ul className={styles.bulletList}>
      {items.map((item, index) => (
        <li key={index} className={styles.bulletItem}>
          <span
            className={styles.dot}
            style={{
              color: variant === 'start' ? 'var(--text-neutral-black-secondary)' : 'var(--text-neutral-black-default)',
            }}
          />
          <span
            className="t-body-16"
            style={{
              color: variant === 'start' ? 'var(--text-neutral-black-secondary)' : 'var(--text-neutral-black-default)',
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseCard({ avatarSrc, name, username, instagramUrl, startItems, resultItems, disabled, resultBadgeText = 'Результат за\u00A08\u00A0месяцев', resultImages }: CaseCardProps) {
  const { openLightbox } = useLightbox();
  const [activeTab, setActiveTab] = useState<'start' | 'result'>('start');
  const baseId = useId();
  const tablistRef = useRef<HTMLDivElement>(null);

  const startTabId = `${baseId}-tab-start`;
  const resultTabId = `${baseId}-tab-result`;
  const startPanelId = `${baseId}-panel-start`;
  const resultPanelId = `${baseId}-panel-result`;

  const handleViewResults = () => {
    if (resultImages && resultImages.length > 0) {
      openLightbox(resultImages, 0, "Результат");
    }
  };

  const handleTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const tabs = tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    if (!tabs || tabs.length === 0) return;

    const currentIndex = Array.from(tabs).findIndex(tab => tab === e.currentTarget);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        e.preventDefault();
        nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    const nextTab = tabs[nextIndex];
    const nextTabId = nextTab.id;
    if (nextTabId === startTabId) {
      setActiveTab('start');
    } else if (nextTabId === resultTabId) {
      setActiveTab('result');
    }
    nextTab.focus();
  };

  return (
    <div className={styles.card} data-reveal>
      <div className={styles.content}>
        <div className={styles.profile}>
          <Image
            src={avatarSrc}
            alt={name}
            width={72}
            height={72}
            className={styles.avatar}
          />
          <div className={styles.profileText}>
            <div className="t-title-20-upper">{name}</div>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.usernameLink}
            >
              {username}
            </a>
          </div>
        </div>
        <div className={styles.information}>
          <div className={styles.informationDesktop}>
            <div className={styles.column}>
              <div className={`${styles.pill} t-caption-14`}>Старт</div>
              <CaseBulletList items={startItems} variant="start" />
            </div>
            <div className={styles.column}>
              <div className={`${styles.pill} ${styles.pillResult} t-caption-14`}>{resultBadgeText}</div>
              <CaseBulletList items={resultItems} variant="result" />
            </div>
          </div>
          <div className={styles.informationMobile}>
            <div ref={tablistRef} className={styles.tablist} role="tablist">
              <button
                type="button"
                role="tab"
                id={startTabId}
                aria-selected={activeTab === 'start'}
                aria-controls={startPanelId}
                tabIndex={activeTab === 'start' ? 0 : -1}
                className={`${styles.tab} ${activeTab === 'start' ? styles.tabActive : ''} t-caption-14`}
                onClick={() => setActiveTab('start')}
                onKeyDown={handleTabKeyDown}
              >
                Старт
              </button>
              <button
                type="button"
                role="tab"
                id={resultTabId}
                aria-selected={activeTab === 'result'}
                aria-controls={resultPanelId}
                tabIndex={activeTab === 'result' ? 0 : -1}
                className={`${styles.tab} ${activeTab === 'result' ? styles.tabActive : ''} t-caption-14`}
                onClick={() => setActiveTab('result')}
                onKeyDown={handleTabKeyDown}
              >
                {resultBadgeText}
              </button>
            </div>
            {activeTab === 'start' && (
              <div
                role="tabpanel"
                id={startPanelId}
                aria-labelledby={startTabId}
                className={styles.tabpanel}
              >
                <CaseBulletList items={startItems} variant="result" />
              </div>
            )}
            {activeTab === 'result' && (
              <div
                role="tabpanel"
                id={resultPanelId}
                aria-labelledby={resultTabId}
                className={styles.tabpanel}
              >
                <CaseBulletList items={resultItems} variant="result" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.action}>
        <TextButton disabled={disabled} onClick={handleViewResults}>Смотреть результаты</TextButton>
      </div>
    </div>
  );
}

