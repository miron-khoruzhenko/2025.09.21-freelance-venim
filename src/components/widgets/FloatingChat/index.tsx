"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const chatIcons = [
  { icon: "/images/1.Hero/notepad_circle_icon.png", alt: "Notepad" },
  { icon: "/images/1.Hero/phone_circle_icon.png", alt: "Phone" },
  { icon: "/images/1.Hero/whatsapp_circle_icon.png", alt: "WhatsApp" },
];

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative flex flex-col items-center gap-3">
        {/* Раскрывающиеся иконки */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-3"
              exit={{ opacity: 0, y: 50 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {chatIcons.map((item, index) => (
                <a key={index} href="#">
                  <Image
                    alt={item.alt}
                    className="hover:scale-110 transition-transform"
                    height={60}
                    src={item.icon}
                    width={60}
                  />
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Главная кнопка чата */}
        <button className="relative" onClick={() => setIsOpen(!isOpen)}>
          <motion.div
            // animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              alt="Chat"
              height={70}
              src="/images/1.Hero/chat_circle_icon.png"
              width={70}
            />
          </motion.div>
        </button>
      </div>
    </div>
  );
}
