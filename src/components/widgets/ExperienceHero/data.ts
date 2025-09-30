// src/components/widgets/ExperienceHero/data.ts

export interface PracticeLink {
  label: string;
  url: string;
  isHighlighted?: boolean;
}

// Список для вкладки "Частные лица"
export const individualPracticeLinks: PracticeLink[] = [
  { label: 'Имущественные и жилищные споры', url: '#housing-disputes' },
  { label: 'Семейное право', url: '#family-law' },
  { label: 'Финансовые и долговые споры', url: '#financial-disputes' },
  { label: 'Защита прав потребителей', url: '#consumer-rights' },
  { label: 'Автоюрист', url: '#auto-lawyer' },
  { label: 'Репутация и честь', url: '#reputation' },
  { label: 'Авторские права и контент', url: '#copyright' },
  { label: 'Трудовое право', url: '#labor-law' },
  { label: 'Земельные споры', url: '#land-disputes' },
  { label: 'Миграционное право', url: '#migration-law' },
  { label: 'Медицинский юрист', url: '#medical-law' },
  { label: 'Долевое участие в строительстве', url: '#construction-disputes' },
  { label: 'Досудебное урегулирование споров', url: '#pre-trial-settlement' },
  { label: 'Налоговые споры', url: '#tax-disputes-individuals' },
  { label: 'Пенсионное право', url: '#pension-law' },
  { label: 'Сделки с недвижимостью', url: '#real-estate-transactions' },
  { label: 'Наследство', url: '#inheritance-law' },
];

// Список для вкладки "Бизнес"
export const businessPracticeLinks: PracticeLink[] = [
  { label: 'Юридическое сопровождение', url: '#legal-support' },
  { label: 'Налоговые споры', url: '#tax-disputes' },
  { label: 'Подрядные споры', url: '#contract-disputes' },
  { label: 'Административные споры', url: '#administrative-disputes' },
  { label: 'Защита деловой репутации', url: '#business-reputation' },
  { label: 'Трудовое право для юрлиц', url: '#corporate-labor-law' },
  { label: 'Digital & IT право', url: '#digital-it-law' },
  { label: 'Интеллектуальная собственность', url: '#intellectual-property' },
];