import SectionIntro from '@/components/sectionIntro/SectionIntro';
import OutcomeCard from '@/components/outcome/OutcomeCard';
import Button from '@/components/button/Button';
import styles from './Who.module.css';

const whoData = [
  {
    title: 'Врачам и специалистам',
    description: 'Около и медицинских наук, которые не знают, как и что снимать, чтобы продавать',
  },
  {
    title: 'Бьюти-мастерам',
    description: 'Которые не умеют снимать результат своих работ так, чтобы они внушали доверие',
  },
  {
    title: 'Студиям, салонам и клиникам',
    description: 'Которые хотят стать успешным брендом и стабильно получать новых клиентов',
  },
];

export default function Who() {
  return (
    <section className={styles.section}>
      <div className={styles.introWrapper}>
        <SectionIntro
          badgeText="Кому подойдёт"
          heading="Кому подходит мой формат работы с контентом"
          paragraph="Этот формат рассчитан на тех, кому нужен понятный контент и результат в блоге — выбирайте свой тип ниже"
          headingClassName="t-display-50"
          paragraphClassName="t-body-18"
          paragraphColorVar="--text-neutral-black-secondary"
          align="right"
        />
      </div>
      <div className={styles.grid}>
        {whoData.map((item, index) => (
          <OutcomeCard key={index} imageSrc={`/who/${index + 1}.jpg`} title={item.title} description={item.description} />
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

