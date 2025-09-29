// src/components/widgets/ExperienceAccordion/data.ts
import { practiceData } from '@/components/widgets/PracticeSection/data';
import { PracticeCase } from '@/types/interfaces';

export interface AccordionItemData {
  title: string;
  cases: PracticeCase[];
}


export const experienceAccordionData: AccordionItemData[] = [
  { title: 'Имущественные и жилищные споры', cases: [] },
  { title: 'Семейное право', cases: practiceData },
  { title: 'Финансовые и долговые споры', cases: [] },
  { title: 'Защита прав потребителей', cases: [] },
  { title: 'Автоюрист', cases: [] },
  { title: 'Репутация и честь', cases: [] },
  { title: 'Авторские права и контент', cases: [] },
	{ title: 'Трудовое право', cases: [] },
	{ title: 'Земельные споры', cases: [] },
	{ title: 'Миграционное право', cases: [] },
	{ title: 'Медицинский юрист', cases: [] },
	{ title: 'Долевое участие в строительстве', cases: [] },
	{ title: 'Досудебное урегулирование споров', cases: [] },
	{ title: 'Налоговые споры', cases: [] },
	{ title: 'Пенсионное право', cases: [] },
	{ title: 'Сделки с недвижимостью', cases: [] },
	{ title: 'Наследство', cases: [] },
];
