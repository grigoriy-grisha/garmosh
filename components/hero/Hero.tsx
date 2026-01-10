import Image from 'next/image';
import Badge from '@/components/badge/Badge';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.topBlock}>
            <div className={styles.headingBlock}>
              <h1 className={styles.title} data-reveal>
                Контент<br />для ваших<br />Блогов
              </h1>
              <p className={`${styles.subtitle} t-heading-24`} data-reveal>
              Который точно привлечет внимание к вам и вашим услугам
              </p>
            </div>
            <div className={styles.badgeList}>
              <Badge label="Для врачей" variant="neutral" data-reveal />
              <Badge label="Мед-экспертов" variant="neutral" data-reveal />
              <Badge label="Клиник" variant="neutral" data-reveal />
              <Badge label="Околомедицинских специалистов" variant="neutral" data-reveal />
            </div>
          </div>
          <div className={styles.mediaMobile} data-reveal>
            <Image
              src="/hero-mobile.jpg"
              alt="Hero"
              width={1362}
              height={2048}
              priority
              quality={75}
              sizes="100vw"
              className={styles.imageMobile}
            />
          </div>
          <p className={`${styles.description} t-title-20`} data-reveal>
          Придумаю, сниму и смонтирую короткие видео под ключ, создам визуал и стратегию{' '}
            <span className={styles.highlight}>продвижения</span> ваших услуг за{' '}
            <span className={styles.highlight}>7 дней</span>
          </p>
        </div>
        <div className={styles.media} data-reveal>
          <Image
            src="/hero.jpg"
            alt="Hero"
            width={1362}
            height={2048}
            priority
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1920px) 681px, 1362px"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

