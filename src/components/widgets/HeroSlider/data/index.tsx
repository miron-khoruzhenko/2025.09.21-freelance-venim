export const slidesData = [
  // Слайд 1 (уникальный)
  {
    type: "main",
    bgImage: "/images/1.Hero/Carousel/hero_bg_1.png",
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
        Юристы для сложных дел.
        <br />
        <span className="">Защищаем, прогнозируем,</span>
        <br />
        <span className="text-primary">выигрываем</span>
      </h1>
    ),
    description:
      "Защищаем бизнес, капитал и репутацию: юрист на аутсорс, наследство, семейные споры, защита прав потребителей, более 20 направлений права",
    features: [
      {
        icon: "/images/1.Hero/award_icon.png",
        text: 'Выиграли <strong class="text-primary">98%<br/> из 10 000+</strong> дел',
      },
      {
        icon: "/images/1.Hero/agreement_icon.png",
        text: 'Стратегия защиты<br/><strong class="text-primary">активов</strong> и репутации',
      },
      {
        icon: "/images/1.Hero/team_icon.png",
        text: '<strong class="text-primary">Вернем до 70%</strong> нашей<br/>комиссии, если проиграем',
      },
    ],
    buttonText: "Бесплатная консультация до 45 минут",
  },
  // Слайд 2 (шаблон)
  {
    type: "template",
    bgImage: "/images/1.Hero/Carousel/hero_bg_2.png",
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
        Развод без войны —<br />с контролем{" "}
        <span className="text-primary">активов</span>
        <br />и <span className="text-primary">интересов детей</span>
      </h1>
    ),
    description:
      "Поможем расторгнуть брак с минимальными финансовыми и моральными потерями",
    features: [
      {
        text: "Вы не останетесь одни — мы всегда на связи, объясняем, поддерживаем",
      },
      {
        text: "Гибкие варианты оплаты — от фиксированной стоимости до почасовой",
      },
      { text: "Медиация споров для урегулирования мирным путем" },
    ],
    buttonText: "Разобрать вашу ситуацию с экспертом",
  },
  // Новые слайды
  {
    type: "template",
    bgImage: "/images/1.Hero/Carousel/hero_bg_3.png",
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
        Ваш актив под контролем: от договора до возврата имущества
      </h1>
    ),
    description:
      "Защитим ваше имущество быстро, четко, с максимальным результатом",
    features: [
      { text: "Юрист, который не усложняет" },
      { text: "Мы за понятный, лучший для вас результат" },
      { text: "Профильные юристы под все виды споров" },
    ],
    buttonText: "Получить план решения в 3 шага",
  },
  {
    type: "template",
    bgImage: "/images/1.Hero/Carousel/hero_bg_4.png",
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
        Юрист для вашего бизнеса: от проверок до судов
      </h1>
    ),
    description:
      "Юридическая защита, понятная бизнесу: без сложных формулировок, с прогнозируемым результатом",
    features: [
      {
        text: "Комплексное сопровождение или точечное подключение под конкретную задачу",
      },
      {
        text: "Работаем строго конфеденциально, прозрачно, в согласованные сроки",
      },
      {
        text: "Гибкая система взаимодействия: юрист на аутсорс, почасовая оплата, barter and fee",
      },
    ],
    buttonText: "Получить стратегию защиты бизнеса",
  },
  {
    type: "template",
    bgImage: "/images/1.Hero/Carousel/hero_bg_5.png",
    title: () => (
      <h1 className="text-2xl md:text-5xl font-extrabold leading-tight text-black">
        Защищаем потребителей от обмана — быстро, грамотно, без лишней суеты
      </h1>
    ),
    description: "Поможем вам вернуть деньги, качество, справедливость",
    features: [
      { text: "Права не защищают себя сами — мы делаем это за вас" },
      {
        text: "Проблемы с договором, имуществом или сервисом? Вы не одни, мы поможем",
      },
      {
        text: "Ваш результат — в центре внимания. Не затягиваем, не уходим в теорию",
      },
    ],
    buttonText: "Получить предложение",
  },
];

export const socialProofIcons = [
  { name: "Яндекс Карты", icon: "/images/1.Hero/yandex_map_icon.png" },
  { name: "2ГИС", icon: "/images/1.Hero/2gis_icon.png" },
  { name: "Google Maps", icon: "/images/1.Hero/google_maps_icon.png" },
  { name: "Zoon", icon: "/images/1.Hero/zoon_icon.png" },
];
