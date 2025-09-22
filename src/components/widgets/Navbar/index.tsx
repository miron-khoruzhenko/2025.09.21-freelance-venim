"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'О компании' },
  {
    href: '/services',
    label: 'Услуги',
    submenu: [
      { href: '/services/individuals', label: 'Частным лицам' },
      { href: '/services/business', label: 'Бизнесу' },
    ]
  },
  { href: '/promo', label: 'Акции' },
  { href: '/experience', label: 'Наш опыт' },
  { href: '/blog', label: 'Статьи и новости' },
  { href: '/reviews', label: 'Отзывы' },
  { href: '/partners', label: 'Партнеры' },
  { href: '/contacts', label: 'Контакты' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <Link href="/" className="flex flex-col">
              <Image src="/images/logo.png" alt="Venim Logo" width={120} height={40} />
              <span className="text-xs text-gray-500">Юридические услуги</span>
            </Link>

            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center gap-4 text-sm text-black">
              <Image src="/images/1.Hero/location.png" alt="location" width={24} height={24} className="h-6 w-6" />
              <div>
                г. Санкт-Петербург, ул. Съезжинская 11<br />
                <span className="text-gray-500">Пн-Пт: 10-19 Сб-Вс: Выходной</span>
              </div>
            </div>

            <div className="hidden md:block text-sm text-black">
              <p className="font-medium">Вопросы? Напишите или позвоните нам:</p>
              <div className="flex items-center gap-4 mt-1">
                <div className="flex gap-2">
                  <a href="#"><Image src="/images/1.Hero/telegram_circle_icon.png" alt="Telegram" width={32} height={32} /></a>
                  <a href="#"><Image src="/images/1.Hero/whatsapp_circle_icon.png" alt="WhatsApp" width={32} height={32} /></a>
                  <a href="#"><Image src="/images/1.Hero/vk_circle_icon.png" alt="VK" width={32} height={32} /></a>
                </div>
                <div className="text-right">
                  <a href="tel:+78124071792" className="font-bold text-base block hover:text-primary">+7 (812) 407 17 92</a>
                  <a href="mailto:info@venim.ru" className="text-gray-500 hover:text-primary">info@venim.ru</a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="text-black">
                <Menu size={28} />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center items-center py-3">
            <ul className="flex items-center justify-between w-full">
              {navLinks.map((link) => (
                <li key={link.href} className={link.submenu ? "group relative" : ""}>
                  <Link href={link.href}
                    className={`font-medium text-black hover:text-primary pb-3 transition-colors
                      ${pathname === link.href ? 'text-primary border-b-2 border-primary' : ''}`}>
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4 w-48
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="border-l-2 border-primary pl-3">
                        {link.submenu.map(sublink => (
                          <Link key={sublink.href} href={sublink.href} className="block text-sm py-1 text-black hover:text-primary">
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 shadow-lg p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg">Меню</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={28} /></button>
            </div>

            <div className='border-t border-b border-gray-200 py-4'>
                <p className='font-bold'>г. Санкт-Петербург, ул. Съезжинская 11</p>
                <a href="tel:+78124071792" className="text-lg font-bold block hover:text-primary my-2">+7 (812) 407 17 92</a>
            </div>

            <nav className="mt-6 flex-grow">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg font-medium text-black hover:text-primary">
                      {link.label}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 mt-1 border-l-2 border-primary">
                        {link.submenu.map(sublink => (
                           <Link key={sublink.href} href={sublink.href} onClick={() => setIsMenuOpen(false)} className="block py-1 text-base text-gray-700 hover:text-primary">
                             {sublink.label}
                           </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto">
                <button className='w-full bg-primary text-white py-3 rounded-lg font-bold'>Бесплатная консультация до 45 минут</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}