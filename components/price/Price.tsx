import SectionIntro from '@/components/sectionIntro/SectionIntro';
import Button from '@/components/button/Button';
import OfferCard from './OfferCard';
import styles from './Price.module.css';

const priceData = [
  {
    iconSrc: '/plug.svg',
    title: 'Консультация',
    features: [
      'Разбираем основные проблемы, почему блог не растет',
      'Анализируем ошибки, отвечаю на ваши вопросы',
      'Формируем продающую стратегию',
      'Даю рекомендации по визуалу и контенту, чтобы отражать ваши ценности и увеличивать продажи',
    ],
    prices: [{ value: '10 000 ₽', suffix: '/ час' }],
    bottomNote: 'для всех',
  },
  {
    iconSrc: '/plug.svg',
    title: 'Врачам и специалистам',
    features: [
      'Консультация',
      'Разработка архетипичной визуальной концепции личного бренда',
      'Стратегия ведения профиля',
      'Написание сценариев для рилсов',
      'Организация и проведение съёмки',
      'Создание визуала ленты — 15 гридов',
      'Создание 15 рилсов',
      'Оформление актуальных под продажи',
      'Доп. материалы для сторис',
      'Рекомендации по использованию контента и ведению Инстаграм*',
    ],
    prices: [
      { value: '60 000 ₽', description: 'для частных специалистов' },
      { value: '75 000 ₽', description: 'для компаний' },
    ],
    bottomNote: '',
  },
  {
    iconSrc: '/plug.svg',
    title: 'Сопровождение ведения',
    features: [
      'Показываю, как эффективно использовать мои материалы и внедрять стратегию развития',
      'Помогаю выстроить воронку продаж и коммуникацию с клиентами',
      'Даю рекомендации по оформлению сторис, контенту и закупке рекламы',
      'При необходимости оказываю психологическую поддержку',
    ],
    prices: [{ value: '25 000 ₽', suffix: '/ мес' }],
    bottomNote: 'для всех',
  },
];

export default function Price() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.introWrapper}>
        <SectionIntro
          badgeText="Цены"
          heading="Упаковка блога и съемка видео контента"
          paragraph="При покупке одного из тарифов, консультация предоставляется абсолютно бесплатно"
          headingClassName="t-display-50"
          paragraphClassName="t-body-18"
          paragraphColorVar="--text-neutral-black-secondary"
          align="right"
        />
      </div>
      <div className={styles.grid}>
        {priceData.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            features={offer.features}
            prices={offer.prices}
            bottomNote={offer.bottomNote}
          />
        ))}
      </div>
      <div className={styles.actions} data-reveal>
        <a href="https://t.me/garmashdd" target="_blank" rel="noopener noreferrer">
          <Button size="lg">Написать в тг</Button>
        </a>
      </div>
    </section>
  );
}

