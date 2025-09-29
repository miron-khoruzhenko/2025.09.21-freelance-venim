"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PATHS } from "@/config/paths";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consent = localStorage.getItem("cookie_consent");

    if (!consent) {
      // Если согласия нет, показываем баннер через 2 секунды
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Сохраняем согласие в localStorage и скрываем баннер
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)]"
          exit={{ opacity: 0, y: 100 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700 text-center sm:text-left">
              Продолжая пользоваться сайтом, вы соглашаетесь с использованием
              cookie-файлов.{" "}
              <Link className="underline hover:text-primary" href={PATHS.cookiesPolicy}>
                Узнать подробнее
              </Link>
            </p>
            <button
              className="bg-primary text-white font-semibold py-2 px-8 rounded-md hover:bg-primary-dark transition-colors whitespace-nowrap"
              onClick={handleAccept}
            >
              Принять и продолжить
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
