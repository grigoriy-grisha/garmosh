import Badge from '@/components/badge/Badge';
import ProblemStepCard from './ProblemStepCard';
import styles from './Problems.module.css';

export default function Problems() {
  return (
    <section className={styles.section}>
      <Badge label="Проблемы" data-reveal />
      <div className={styles.grid}>
        <div className={styles.textCell}>
          <h2 className="t-display-50" data-reveal>Вы уже пробовали — но охваты и заявки не растут</h2>
          <p className="t-body-18" style={{ color: 'var(--text-neutral-black-secondary)' }} data-reveal>
          Если узнали себя хотя бы в 2 пунктах — значит, нужна структура: что снимать, как упаковать и куда вести человека, чтобы появились заявки
          </p>
        </div>
        <ProblemStepCard variant="step" step="01" text="Нет времени на создание контента" />
        <ProblemStepCard variant="step" step="02" text="Не знаете, что публиковать" />
        <ProblemStepCard variant="step" step="03" text="Нет единой стратегии продвижения" />
        <ProblemStepCard variant="step" step="04" text="Профиль не привлекает клиентов" />
        <ProblemStepCard variant="cta" ctaLabel="Написать в тг" />
      </div>
    </section>
  );
}

