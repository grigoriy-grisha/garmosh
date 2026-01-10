import SectionIntro from '@/components/sectionIntro/SectionIntro';
import OutcomeCard from '@/components/outcome/OutcomeCard';
import styles from './Agreements.module.css';

const agreementsData = [
  {
    title: 'Не готовы быть в кадре',
    description: 'Если вы постоянно недовольны внешностью и хотите «спрятаться» за сильной обработкой, съёмочный процесс будет тяжёлым и результат по контенту пострадает',
  },
  {
    title: 'Продукт пока не готов',
    description: 'Если услуга не соответствует заявленной цене и качеству, не берусь за проект — важно сохранять честность перед вашей аудиторией',
  },
  {
    title: 'Не доверяете специалисту',
    description: 'Если вы хотите полностью игнорировать мои рекомендации и вести процесс строго «по-своему», лучше выбрать другой формат или другого исполнителя',
  },
  {
    title: 'Нет дисциплины по срокам',
    description: 'Частые переносы, отмены и несоблюдение договорённостей по подготовке к съёмке срывают график и снижают качество результата',
  },
  {
    title: 'Не согласованы границы связи',
    description: 'Для комфортной работы заранее фиксируем график коммуникации и сроки ответов, чтобы процесс шёл спокойно и предсказуемо',
  },
];

export default function Agreements() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.sidebar}>
          <SectionIntro
            badgeText="Перед стартом"
            heading="Договорённости, которые важны для результата"
            paragraph="Я работаю на результат, поэтому заранее фиксируем условия. Если узнаёте себя — формат может не подойти"
            headingClassName="t-display-50"
            paragraphClassName="t-body-18"
            paragraphColorVar="--text-neutral-black-secondary"
            align="left"
          />
        </div>
        <div className={styles.list}>
          {agreementsData.map((item, index) => (
            <OutcomeCard key={index} number={index + 1} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

