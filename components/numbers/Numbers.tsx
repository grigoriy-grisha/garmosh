import NumberCard from './NumberCard';
import styles from './Numbers.module.css';

const numbersData = [
  {
    number: '5 лет',
    description: 'Опыт в создании контента и стратегии',
  },
  {
    number: '45+',
    description: 'Реализованных контент‑проектов',
  },
  {
    number: '7 дней',
    description: 'До готового набора контента и плана',
  },
];

export default function Numbers() {
  return (
    <section className={styles.numbers}>
      <div className={styles.cards}>
        {numbersData.map((item, index) => (
          <NumberCard
            key={index}
            number={item.number}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

