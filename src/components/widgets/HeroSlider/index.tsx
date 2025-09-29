"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { slidesData, socialProofIcons } from "./data";

import { PATHS } from "@/config/paths";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Обновленная логика таймера
  useEffect(() => {
    const setSliderTimeout = () => {
      timeoutRef.current = setTimeout(
        () =>
          setCurrentSlide((prev) =>
            prev === slidesData.length - 1 ? 0 : prev + 1,
          ),
        5000,
      );
    };

    // setSliderTimeout(); // Автопрокрутка включена

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentSlide]);

  const handlePaginationClick = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  const slide = slidesData[currentSlide];

  return (
    <section id="hero" className="relative w-full h-dvh bg-gray-100 text-black overflow-hidden font-montserrat">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 w-full h-full"
          exit={{ opacity: 0, scale: 1.05 }}
          initial={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            fill
            alt="Hero Background"
            className="object-cover object-[80%_50%] md:object-center"
            priority={currentSlide === 0}
            sizes="100vw"
            src={slide.bgImage}
            style={{ objectPosition: "80% 50%" }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 h-full flex md:items-end lg:pb-20">
        <div className="w-full md:w-1/2 h-full md:h-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col  pt-40 pb-20 md:pt-0 md:pb-0 md:block md:py-8"
              exit={{ opacity: 0, y: -20 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Верхняя часть (заголовок, описание, преимущества) */}
              <div>
                <slide.title />
                <p className="mt-4 text-xs md:text-lg max-w-4xl">
                  {slide.description}
                </p>

                {/* Features Section */}
                <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-6 items-start">
                  {slide.type === "main" ? (
                    <div className="grid grid-cols-3 gap-x-2 md:flex md:gap-6 w-full justify-start">
                      {slide.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center text-center gap-2 w-full md:w-40 flex-grow"
                        >
                          {"icon" in feature && (
                            <Image
                              alt=""
                              height={50}
                              src={feature.icon}
                              width={50}
                            />
                          )}
                          <p
                            dangerouslySetInnerHTML={{ __html: feature.text }}
                            className="text-[10px] md:text-sm"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {slide.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Image
                            alt="check"
                            height={24}
                            src="/images/click.svg"
                            width={24}
                          />
                          <span className="text-xs md:text-sm">
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Social Proof Section (mobile specific layout) */}
                {slide.type === "main" && (
                  <div className="md:hidden mt-4 p-3 border border-gray-300 rounded-lg">
                    <div className="flex justify-between items-center gap-4">
                      <div className="grid grid-cols-2 gap-y-2 place-items-center flex-grow">
                        {socialProofIcons.map((item) => (
                          <Image
                            key={item.name}
                            alt={item.name}
                            height={25}
                            src={item.icon}
                            style={{ objectFit: "contain" }}
                            width={80}
                          />
                        ))}
                      </div>
                      <p className="text-left mt-2 text-[10px] lg:text-xl text-gray-600 w-1/2">
                        <span className="text-yellow-500">★★★★★</span> Более
                        1000 положительных отзывов на сторонних площадках
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Нижняя часть (кнопка, соц. доказательства), прижата вниз на мобильных */}
              <div className="mt-auto md:mt-8">
                <div className={`${slide.type === "main" ? "w-full " : ""}`}>
                  <button className="w-full bg-primary text-white py-3 md:py-4 rounded-md text-xs md:text-lg font-bold hover:bg-primary-dark transition-colors font-unbounded">
                    {slide.buttonText} {slide.type === "template" && "0,00 ₽"}
                  </button>
                  {/* Social Proof Section (desktop layout) */}
                  {slide.type === "main" ? (
                    <div className="hidden md:block mt-6">
                      <div className="flex justify-between items-center">
                        {socialProofIcons.map((item) => (
                          <Image
                            key={item.name}
                            alt={item.name}
                            height={25}
                            src={item.icon}
                            style={{ objectFit: "contain" }}
                            width={80}
                          />
                        ))}
                      </div>
                      <p className="text-center lg:text-left mt-2 text-[10px] lg:text-xl text-gray-600">
                        <span className="text-yellow-500">★★★★★</span> Более
                        1000 положительных отзывов на сторонних площадках
                      </p>
                    </div>
                  ) : (
                    <div className="mt-6 flex flex-col lg:flex-row justify-between gap-2 lg:gap-8 text-lg font-medium font-montserrat">
                      <Link
                        className="underline hover:text-primary"
                        href={PATHS.reviews}
                      >
                        Почитать отзывы
                      </Link>
                      <Link
                        className="underline hover:text-primary"
                        href={PATHS.experience}
                      >
                        Посмотреть случаи из нашей практики
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => handlePaginationClick(index)}
          />
        ))}
      </div>

      {/* Navigation arrows (mobile only) */}
      <div className="md:hidden absolute inset-y-0 w-full flex items-center justify-between px-4 z-20">
        <button
          className="bg-white/50 p-2 rounded-full text-black hover:bg-white transition-colors"
          onClick={goToPrevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="bg-white/50 p-2 rounded-full text-black hover:bg-white transition-colors"
          onClick={goToNextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
