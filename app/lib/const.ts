const Navigation = [
  {
    label: "Dashboard",
    icon: "IconCalendarStats",
    initiallyOpened: true,
    links: [
      { label: "Бронирования", link: "/crm/booking" },
      { label: "Визиты", link: "/crm/booking" },
    ],
  },
  {
    label: "Студия",
    icon: "IconFileAnalytics",
    initiallyOpened: true,
    links: [
      { label: "Кабинеты", link: "/crm/room" },
      { label: "Услуги", link: "/crm/service" },
      { label: "Абонементы", link: "/crm/abonnement" },
    ],
  },

  {
    label: "Пользователи",
    icon: "IconGauge",
    initiallyOpened: true,
    links: [
      { label: "Все", link: "/crm/user" },
      { label: "Работники", link: "/crm/user?role=WORKER" },
      { label: "Клиенты", link: "/crm/user?role=CLIENT" },
    ],
  },
];

const FooterLinks = [
  {
    title: "Studios",
    links: [
      { label: "Звукозапись", link: "#" },
      { label: "Вокал", link: "#" },
      { label: "Гатара", link: "#" },
      { label: "Барабаны", link: "#" },
    ],
  },
  {
    title: "Unicorn",
    links: [
      { label: "Новости", link: "#" },
      { label: "Акции", link: "#" },
      { label: "Cертификаты", link: "#" },
    ],
  },
  {
    title: "",
    links: [
      { label: "Сотрудничество", link: "#" },
      { label: "Аренда", link: "#" },
    ],
  },
];

export { Navigation, FooterLinks };
