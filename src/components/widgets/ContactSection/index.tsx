"use client";

import { useState } from 'react';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Button } from '@/components/shared/Button';
import Image from 'next/image';
// import { PATHS } from '@/config/paths';
import { CONTACT } from '@/config/site';
import { PATHS } from '@/config/paths';
import Link from 'next/link';
import { ANCHORS } from '@/config/anchors';

const socialLinks = [
  { href: CONTACT.telegram, icon: "/images/1.Hero/telegram_circle_icon.png", alt: "Telegram" },
  { href: CONTACT.whatsapp, icon: "/images/1.Hero/whatsapp_circle_icon.png", alt: "WhatsApp" },
  { href: CONTACT.vk, icon: "/images/1.Hero/vk_circle_icon.png", alt: "VK" },
];

// Общие стили для полей ввода вынесены в константу для чистоты кода
const inputBaseClasses = "w-full p-4 rounded-lg bg-gray-100 border border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-shadow";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    query: '',
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Пожалуйста, дайте согласие на обработку персональных данных.");
      return;
    }
    console.log("Form Data Submitted:", formData);
    // Здесь будет логика отправки формы
  };

  return (
    <section id={ANCHORS.contact} className="relative py-16 md:py-20 overflow-hidden">
      <Image
        src="/images/contact_form_bg.png"
        alt="Background"
        fill
        sizes="100vw"
        className="object-cover"
      />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          
          <div className="text-white flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-start lg:items-center">
            <div className="flex gap-4">
              {socialLinks.map(link => (
                <a key={link.alt} href={link.href} className="transition-transform hover:scale-110">
                  <Image src={link.icon} alt={link.alt} width={64} height={64} />
                </a>
              ))}
            </div>
            <div className=" text-xl font-semibold">
              <a href="tel:+79218866401" className="block underline hover:text-primary transition-colors">+7 (921) 886-64-01</a>
              <a href="tel:+78124071792" className="block mt-2 underline hover:text-primary transition-colors">+7 (812) 407-17-92</a>
              <a href="mailto:info@venim.ru" className="block mt-2 underline hover:text-primary transition-colors">info@venim.ru</a>
            </div>
          </div>

          <div className="flex flex-col gap-9">
            {/* Блок 1: Заголовок */}
            <div className='bg-[#DCDEDE] p-8 md:p-12 rounded-xl'>
              <SectionTitle>Запишитесь на консультацию</SectionTitle>
              <p className="mt-2 text-gray-700">Наши специалисты свяжутся с вами в течение 30 минут</p>
            </div>
            
            <form id={ANCHORS.contactForm} onSubmit={handleSubmit} className="flex flex-col ">
              {/* Блок 2: Поля ввода */}
              <div className="flex flex-col gap-4 bg-[#DCDEDE] p-8 md:p-12 rounded-xl">
                <input type="text" name="name" placeholder="Имя" value={formData.name} onChange={handleChange} className={inputBaseClasses} required />
                <input type="tel" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} className={inputBaseClasses} required />
                <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className={inputBaseClasses} />
                <textarea name="query" placeholder="Ваш запрос" value={formData.query} onChange={handleChange} rows={5} className={`${inputBaseClasses} resize-none`} required />
              </div>
              
              {/* Блок 3: Кнопка и согласие */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-12 bg-[#DCDEDE] p-8 md:p-12 rounded-xl">
                <Button type="submit" className="!px-12 !py-4 !text-base w-full md:w-auto flex-shrink-0 disabled:bg-gray-400 disabled:cursor-not-allowed">
                  Отправить заявку
                </Button>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id={ANCHORS.inputAgreement} checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="h-5 w-5 rounded mt-0.5 border-gray-400 text-primary focus:ring-primary flex-shrink-0" />
                  <label htmlFor={ANCHORS.inputAgreement} className="text-xs text-gray-600">
                    Я даю согласие на обработку моих персональных данных в соответствии с <Link href={PATHS.privacyPolicy} className="underline">Политикой конфиденциальности</Link>
                  </label>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};