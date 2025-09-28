// src/components/widgets/ValuesSection/data.ts

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export const valuesData: Value[] = [
  {
    icon: '/images/5.Values/1.honesty.svg',
    title: 'Честность',
    description: 'Мы открыто говорим о перспективах дела, никогда не даём ложных обещаний и всегда действуем в интересах клиента',
  },
  {
    icon: '/images/5.Values/2.professionalism.svg',
    title: 'Профессионализм',
    description: 'Команда опытных юристов с узкой специализацией решает задачи любой сложности, соблюдая высокие стандарты юридической практики',
  },
  {
    icon: '/images/5.Values/3.confidential.svg',
    title: 'Конфиденциальность',
    description: 'Все обращения строго защищены — мы гарантируем полную сохранность личной и коммерческой информации',
  },
  {
    icon: '/images/5.Values/4.responsibility.svg',
    title: 'Ответственность',
    description: 'Мы не просто консультируем — мы отвечаем за результат, сроки и каждое слово, сказанное клиенту',
  },
];