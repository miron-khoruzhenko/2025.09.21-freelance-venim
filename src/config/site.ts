export type SiteConfig = typeof siteConfig;
import { PATHS } from './paths'; // 1. Импортируем наши пути

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
};

export const CONTACT = {
  phone: '+7(495)204-35-03',
  phoneHref: 'tel:+74952043503',
  email: 'info@venim.ru',
  emailHref: 'mailto:info@venim.ru',
  telegram: 'https://t.me/venimyu',
  whatsapp: 'https://wa.me/79218866401',
  vk: 'https://vk.com/club139492715',
}


export type NavLink = {
  href: string;
  label: string;
  submenu?: { href: string; label: string }[];
};

export const navLinks: NavLink[] = [
  { href: PATHS.about, label: 'О компании' }, // 2. Используем пути из объекта
  { href: PATHS.partners, label: 'Партнеры' },
  {
    href: PATHS.services.root, // <-- корень раздела
    label: 'Услуги',
    submenu: [
      { href: PATHS.services.individuals, label: 'Частным лицам' },
      { href: PATHS.services.business, label: 'Бизнесу' },
    ]
  },
  { href: PATHS.promo, label: 'Акции' },
  { href: PATHS.experience, label: 'Наш опыт' },
  { href: PATHS.blog, label: 'Статьи и новости' },
  { href: PATHS.reviews, label: 'Отзывы' },
  { href: PATHS.contacts, label: 'Контакты' },
];