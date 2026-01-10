import SectionIntro from '@/components/sectionIntro/SectionIntro';
import OutcomeCard from './OutcomeCard';
import styles from './Outcome.module.css';

const outcomeData = [
  {
    title: 'Стратегия профиля',
    description: 'Что и зачем публикуем, чтобы вести к услуге/продукту',
  },
  {
    title: 'Сценарии рилсов',
    description: 'Темы и структура роликов под вашу нишу и аудиторию',
  },
  {
    title: 'Организация съёмки',
    description: 'Образы, локации, план, подготовка',
  },
  {
    title: 'Съёмка с постановкой',
    description: 'Ракурсы, помощь с позированием, уверенная подача',
  },
  {
    title: 'Монтаж видео',
    description: 'Готовые короткие видео «под ключ»',
  },
  {
    title: 'Визуал профиля',
    description: 'Лента и оформление, чтобы профиль выглядел цельно',
  },
];

const outcomeImages = ['/outcome/1.png', '/outcome/2.png', '/outcome/3.png', '/outcome/4.png', '/outcome/5.jpg', '/outcome/6.png'];

export default function Outcome() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionIntro
          badgeText="Что вы получите"
          heading="Соберу ваш блог в систему, которая показывает результат"
          paragraph="Не «просто рилсы», а полный набор материалов и стратегия — чтобы профиль выглядел профессионально и приводил запросы"
          headingClassName="t-display-50"
          paragraphClassName="t-body-18"
          paragraphColorVar="--text-neutral-black-secondary"
          align="right"
        />
        <div className={styles.grid} role="list">
          {outcomeData.map((item, index) => (
            <OutcomeCard
              key={index}
              imageSrc={outcomeImages[index]}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

