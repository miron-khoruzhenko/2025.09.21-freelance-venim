"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CONTACT, navLinks } from '@/config/site';
import { getAnchor } from "@/config/anchors";


export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full backdrop-blur-md shadow-sm border-b-2 border-primary font-montserrat">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="flex justify-between items-center py-3">
            <Link className="flex flex-col relative" href={getAnchor('hero')}>
              <Image
                alt="Venim Logo"
                height={120}
                width={330}
                src="/images/logo.png"
                className="h-32 w-80"
              />
              <span className="text-lg font-montserrat hidden lg:inline absolute top-1/2 -translate-y-1/2 right-2">
                Юридические услуги
              </span>
            </Link>

            {/* Desktop Contact Info */}
            <div className="hidden md:flex items-center gap-4 text-2xl text-black">
              <Image
                alt="location"
                className="h-20 w-20"
                height={80}
                width={80}
                src="/images/1.Hero/location.png"
              />
              <div>
                г. Санкт-Петербург, <br /> ул. Съезжинская 11
                <br />
                <span className="text-gray-500 text-lg">
                  Пн-Пт: 10-19 Сб-Вс: Выходной
                </span>
              </div>
            </div>

            <div className="hidden md:block text-sm text-black">
              <p className="text-2xl">
                Вопросы? Напишите или позвоните нам:
              </p>
              <div className="flex items-center justify-between gap-4 mt-1">
                <div className="flex gap-2">
                  <a href={CONTACT.telegram}>
                    <Image
                      alt="Telegram"
                      height={52}
                      src="/images/1.Hero/telegram_circle_icon.png"
                      width={52}
                    />
                  </a>
                  <a href={CONTACT.whatsapp}>
                    <Image
                      alt="WhatsApp"
                      height={52}
                      src="/images/1.Hero/whatsapp_circle_icon.png"
                      width={52}
                    />
                  </a>
                  <a href={CONTACT.vk}>
                    <Image
                      alt="VK"
                      height={52}
                      src="/images/1.Hero/vk_circle_icon.png"
                      width={52}
                    />
                  </a>
                </div>
                <div className="text-right">
                  <a
                    className="text-2xl block hover:text-primary"
                    href="tel:+78124071792"
                  >
                    +7 (812) 407 17 92
                  </a>
                  <a
                    className="text-2xl hover:text-primary"
                    href="mailto:info@venim.ru"
                  >
                    info@venim.ru
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-black"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center items-center py-3">
            <ul className="flex items-center justify-between w-full">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={link.submenu ? "group relative" : ""}
                >
                    {(() => {
                    const normalize = (p: string) =>
                      (p === "/" ? "/" : p.replace(/\/+$/, "")) || "/";
                    const current = normalize(pathname || "");
                    const target = normalize(link.href);
                    const isActive =
                      target === "/"
                      ? current === "/"
                      : current === target || current.startsWith(target + "/") || current.startsWith(target);
                    return (
                      <Link
                      className={`font-semibold text-2xl text-black hover:text-primary pb-3 transition-colors ${
                        isActive ? "text-primary border-b-2 border-primary" : ""
                      }`}
                      href={link.href}
                      >
                      {link.label}
                      </Link>
                    );
                    })()}
                  {link.submenu && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md p-4 w-
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                    >
                      <div className="border-l-2 border-primary pl-3">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            className="block text-2xl py-1 text-black hover:text-primary whitespace-nowrap"
                            href={sublink.href}
                          >
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
            animate={{ x: 0 }}
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-white z-50 shadow-lg p-6 flex flex-col"
            exit={{ x: "100%" }}
            initial={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg">Меню</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="border-t border-b border-gray-200 py-4">
              <p className="font-bold">
                г. Санкт-Петербург, ул. Съезжинская 11
              </p>
              <a
                className="text-lg font-bold block hover:text-primary my-2"
                href="tel:+78124071792"
              >
                +7 (812) 407 17 92
              </a>
            </div>

            <nav className="mt-6 flex-grow">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="block py-2 text-lg font-medium text-black hover:text-primary"
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.submenu && (
                      <div className="pl-4 mt-1 border-l-2 border-primary">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            className="block py-1 text-base text-gray-700 hover:text-primary"
                            href={sublink.href}
                            onClick={() => setIsMenuOpen(false)}
                          >
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
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">
                Бесплатная консультация до 45 минут
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
