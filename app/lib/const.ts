const Navigation = [
  {
    label: "Unicorn",
    icon: "IconCalendarStats",
    initiallyOpened: true,
    links: [
      { label: "Выйти", link: "/crm/booking" },
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
