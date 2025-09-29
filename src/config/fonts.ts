import { Montserrat, Unbounded } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '600', '700'], // Укажите все нужные вам толщины
  variable: '--font-montserrat',       // Имя CSS-переменной для этого шрифта
  display: 'swap',
});

export const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['600', '700'],            // Укажите все нужные вам толщины
  variable: '--font-unbounded',      // Имя CSS-переменной для этого шрифта
  display: 'swap',
});