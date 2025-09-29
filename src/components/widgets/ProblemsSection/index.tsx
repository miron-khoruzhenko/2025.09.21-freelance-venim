// src/components/widgets/ProblemsSection/index.tsx

import { problemsDataIndividuals, problemsDataBusiness } from './data';

export const ProblemsSection = ({isBusiness=false}:{isBusiness?:boolean}) => {
  return (
    <section className="py-16 md:py-48 bg-white">
      <div className="container px-4 mx-auto">
        {/* Главный заголовок секции */}
        {isBusiness ?  
        <h2 className="text-left text-3xl md:text-5xl font-semibold font-unbounded">
          Когда дело касается бизнеса, любая ошибка может дорого стоить. Мы <span className="text-primary">возьмем на себя</span> правовые риски и защиту интересов вашей компании
        </h2>
        : 
        <h2 className="text-left text-3xl md:text-5xl font-semibold font-unbounded">
          Не оставайтесь один на один с проблемой — мы поможем. <br className="hidden md:block" />
          <span className="text-primary">Защищаем ваши интересы</span> в любой сложной ситуации
        </h2>}

        {/* Адаптивная сетка */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-24">
          {(isBusiness ? problemsDataBusiness : problemsDataIndividuals).map((problem) => (
            <div key={problem.title} className="text-left text-xl">
              <p className="font-unbounded font-light text-[7rem] leading-none text-center text-gray-800">X</p>
              <h3 className="font-semibold h-12 mt-6">{problem.title}</h3>
              <p className="text-gray-600 mt-8">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};