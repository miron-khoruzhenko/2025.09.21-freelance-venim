// src/components/widgets/TeamSection/data.ts

// Типизация для удобства
export interface TeamMember {
  id: number;
  name: string;
  title: string;
  avatar: string;
  largeImage: string;
  details: string[];
}

export interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
}

// Данные о команде с корректными путями к изображениям
export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Венцель Мария Александровна",
    title: "Генеральный директор",
    avatar: "/images/3.Team/team_member_1.jpg",
    largeImage: "/images/3.Team/team_member_1.jpg",
    details: [
      "Дополнительная информация о специалисте 1",
      "Дополнительная информация о специалисте 2",
      "Дополнительная информация о специалисте 3",
    ],
  },
  {
    id: 2,
    name: "Дмитриева Ксения Викторовна",
    title: "Ведущий юрист",
    avatar: "/images/3.Team/team_member_2.jpg",
    largeImage: "/images/3.Team/team_member_2.jpg",
    details: [
      "Специализация на семейном праве",
      "Более 100 успешных дел",
      "Член коллегии адвокатов",
    ],
  },
  {
    id: 3,
    name: "Пастухова Анна Александровна",
    title: "Юрист по корпоративному праву",
    avatar: "/images/3.Team/team_member_3.jpg",
    largeImage: "/images/3.Team/team_member_3.jpg",
    details: [
      "Сопровождение сделок M&A",
      "Регистрация и ликвидация юр. лиц",
      "Эксперт по налоговым спорам",
    ],
  },
  {
    id: 4,
    name: "Венцель Мария Александровна",
    title: "Генеральный директор",
    avatar: "/images/3.Team/team_member_1.jpg",
    largeImage: "/images/3.Team/team_member_1.jpg",
    details: [
      "Дополнительная информация о специалисте 1",
      "Дополнительная информация о специалисте 2",
      "Дополнительная информация о специалисте 3",
    ],
  },
  {
    id: 5,
    name: "Дмитриева Ксения Викторовна",
    title: "Ведущий юрист",
    avatar: "/images/3.Team/team_member_2.jpg",
    largeImage: "/images/3.Team/team_member_2.jpg",
    details: [
      "Специализация на семейном праве",
      "Более 100 успешных дел",
      "Член коллегии адвокатов",
    ],
  },
  {
    id: 6,
    name: "Пастухова Анна Александровна",
    title: "Юрист по корпоративному праву",
    avatar: "/images/3.Team/team_member_3.jpg",
    largeImage: "/images/3.Team/team_member_3.jpg",
    details: [
      "Сопровождение сделок M&A",
      "Регистрация и ликвидация юр. лиц",
      "Эксперт по налоговым спорам",
    ],
  },
];

// Данные для счётчика
export const statsData: Stat[] = [
  { prefix: ">", value: 10, suffix: "", label: "лет успешной работы" },
  { value: 98.2, suffix: "%", label: "положительных результатов" },
  { value: 10000, suffix: "+", label: "выигранных дел за 2014-2025 год" },
  {
    prefix: ">",
    value: 7,
    suffix: " млрд.",
    label: "рублей взысканий в пользу клиентов",
  },
];
