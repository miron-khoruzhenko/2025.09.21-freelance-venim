// src/components/widgets/RoadmapSection/data.ts

export interface RoadmapStep {
  numeral: string;
  title: string;
  description: string;
}

export const roadmapData: RoadmapStep[] = [
  {
    numeral: 'I',
    title: 'Обращение',
    description: 'Заявка на сайте, звонок или сообщение в мессенджере',
  },
  {
    numeral: 'II',
    title: 'Консультация',
    description: 'Бесплатный разбор ситуации и документов',
  },
  {
    numeral: 'III',
    title: 'Договор',
    description: 'Согласуем условия и оформим сотрудничество',
  },
  {
    numeral: 'IV',
    title: 'Работа юриста',
    description: 'Ведём дело и держим вас в курсе',
  },
  {
    numeral: 'V',
    title: 'Результат',
    description: 'Добиваемся решения в вашу пользу',
  },
];