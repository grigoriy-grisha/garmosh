import SectionIntro from '@/components/sectionIntro/SectionIntro';
import CaseCard from './CaseCard';
import styles from './Cases.module.css';

const casesData = [
  {
    avatarSrc: '/taraoncoexpert.jpg',
    name: 'Тара Эйнуллаева | Онколог-химиотерапевт',
    username: '@taraoncoexpert',
    instagramUrl: 'https://www.instagram.com/taraoncoexpert/',
    startItems: [
      '8 тыс. подписчиков',
      'Много попыток снимать рилсы с другими специалистами',
      'До 5 тыс. просмотров на ролик',
      'Реклама не давала подписчиков',
      '0 продаж консультации',
    ],
    resultItems: [
      '+50 тыс. подписчиков',
      'Охваты выросли до миллионов',
      'Выше узнаваемость в сфере',
      'Регулярные продажи продуктов и консультаций',
    ],
  },
  {
    avatarSrc: '/lunalikaya.jpg',
    name: 'Айнур Алихановна | врач педиатр-остеопат',
    username: '@doc.lunalikaya20',
    instagramUrl: 'https://www.instagram.com/doc.lunalikaya20/',
    startItems: [
      '10 тыс. подписчиков',
      '0 рилсов по теме (экспертный контент не выходил)',
      'Блог без позиционирования как специалиста',
      '0 продаж консультаций',
    ],
    resultItems: [
      '+3 тыс. подписчиков',
      'Рост охватов',
      'Выше узнаваемость специалиста',
      'Регулярные продажи продуктов и консультаций',
    ],
    resultBadgeText: 'Результат за\u00A02\u00A0месяца',
  },
];

export default function Cases() {
  return (
    <section id="cases" className={styles.section}>
      <SectionIntro
        badgeText="Кейсы"
        heading="Вот как меняется блог, когда появляется система"
        headingClassName="t-display-50"
      />
      <div className={styles.grid}>
        {casesData.map((caseData, index) => (
          <CaseCard
            key={index}
            avatarSrc={caseData.avatarSrc}
            name={caseData.name}
            username={caseData.username}
            instagramUrl={caseData.instagramUrl}
            startItems={caseData.startItems}
            resultItems={caseData.resultItems}
            disabled={index === 1}
            resultBadgeText={caseData.resultBadgeText}
            resultImages={index === 0 ? [
              "/case-one/1.jpg",
              "/case-one/2.jpg",
              "/case-one/3.jpg",
              "/case-one/4.jpg",
            ] : undefined}
          />
        ))}
      </div>
    </section>
  );
}

