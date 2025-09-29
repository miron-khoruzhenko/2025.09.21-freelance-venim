// src/components/widgets/PracticeSection/data.ts
import React from 'react';

export interface PracticeCase {
  id: number;
  title: string;
  subtitle: string;
  mainContent: React.ReactNode;
  resultText: string;
}

export const practiceData: PracticeCase[] = [
  {
    id: 1,
    title: "Победа по делу против ЖК 'Белый остров'",
    subtitle: "Клиент получил компенсацию за срыв сроков и моральный вред",
    mainContent: (
      <div className="my-8">
        <p className="font-unbounded font-semibold text-4xl md:text-5xl text-primary">+1,2 млн ₽</p>
        <p className="font-montserrat font-normal text-lg md:text-xl text-gray-600">взыскано</p>
      </div>
    ),
    resultText: "Суд удовлетворил иск",
  },
  {
    id: 2,
    title: "Победа по делу против ЖК 'Белый остров'",
    subtitle: "Клиент получил компенсацию за срыв сроков и моральный вред",
    mainContent: (
      <div className="my-8">
        <p className="font-unbounded font-semibold text-3xl md:text-4xl text-primary leading-tight">Установлено право наследования</p>
      </div>
    ),
    resultText: "Суд удовлетворил иск",
  },
  {
    id: 3,
    title: "Победа по делу против ЖК 'Белый остров'",
    subtitle: "Клиент получил компенсацию за срыв сроков и моральный вред",
    mainContent: (
       <div className="my-8">
        <p className="font-unbounded font-semibold text-4xl md:text-5xl text-primary">+1,2 млн ₽</p>
        <p className="font-montserrat font-normal text-lg md:text-xl text-gray-600">взыскано</p>
      </div>
    ),
    resultText: "Суд удовлетворил иск",
  },
  {
    id: 4,
    title: "Победа по делу против ЖК 'Белый остров'",
    subtitle: "Клиент получил компенсацию за срыв сроков и моральный вред",
    mainContent: (
      <div className="my-8">
        <p className="font-unbounded font-semibold text-4xl md:text-5xl text-primary">+1,2 млн ₽</p>
        <p className="font-montserrat font-normal text-lg md:text-xl text-gray-600">взыскано</p>
      </div>
    ),
    resultText: "Суд удовлетворил иск",
  },
  {
    id: 5,
    title: "Победа по делу против ЖК 'Белый остров'",
    subtitle: "Клиент получил компенсацию за срыв сроков и моральный вред",
    mainContent: (
      <div className="my-8">
        <p className="font-unbounded font-semibold text-3xl md:text-4xl text-primary leading-tight">Установлено право наследования</p>
      </div>
    ),
    resultText: "Суд удовлетворил иск",
  },
  {
    id: 6,
    title: "Победа по делу против ЖК 'Белый остров'",
    subtitle: "Клиент получил компенсацию за срыв сроков и моральный вред",
    mainContent: (
       <div className="my-8">
        <p className="font-unbounded font-semibold text-4xl md:text-5xl text-primary">+1,2 млн ₽</p>
        <p className="font-montserrat font-normal text-lg md:text-xl text-gray-600">взыскано</p>
      </div>
    ),
    resultText: "Суд удовлетворил иск",
  },
  
  // Добавьте больше кейсов при необходимости
];