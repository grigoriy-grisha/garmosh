import Button from '@/components/button/Button';
import styles from './Cta.module.css';

export default function Cta() {
  return (
    <section className={styles.section} data-reveal>
      <div className={styles.box}>
        <h2 className={`t-display-40-upper ${styles.heading}`} data-reveal>Напишите мне, если не знаете что снимать</h2>
        <div className={styles.right}>
          <p className={`t-body-18 ${styles.paragraph}`} data-reveal>
              Я помогу с идеями, сценариями и съёмкой, чтобы блог выглядел уверенно и профессионально
          </p>
          <div className={styles.buttonWrapper} data-reveal>
            <a href="https://t.me/garmashdd" target="_blank" rel="noopener noreferrer">
              <Button size="md">Написать в тг</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

