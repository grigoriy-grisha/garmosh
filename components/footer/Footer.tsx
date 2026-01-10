import Badge from '@/components/badge/Badge';
import Button from '@/components/button/Button';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.imageCol} data-reveal>
          <img className={styles.image} src="/footer.jpg" alt="" />
        </div>

        <div className={styles.contentCol}>
          <div className={styles.content}>
            <div className={styles.top}>
              <Badge label="Контакты" data-reveal />
              <h2 className={`t-display-32 ${styles.heading}`} data-reveal>
                  Напишите мне — объясню всё простым языком и помогу выбрать пакет под ваш запрос
              </h2>
            </div>

            <div className={styles.actions} data-reveal>
              <img className={styles.qr} src="/qr.svg" alt="QR code" />
              <a href="https://t.me/garmashdd" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Написать в тг</Button>
              </a>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.bottomLeft} data-reveal>
              <p className={`t-caption-14 ${styles.disclaimer}`}>
                  Meta признана экстремистской организацией и запрещена в РФ
              </p>
            </div>

            <div className={styles.bottomRight} data-reveal>
              <p className={`t-caption-14 ${styles.creditText}`}>
                Сайт разработан{' '}
                <a className={styles.credit} href="https://t.me/yajevladimir" target="_blank" rel="noopener noreferrer">
                  @yajevladimir
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

