import Link from "next/link";
import BasePage from "@/app/ui/BasePage";
import { Text, ActionIcon, } from "@mantine/core";
import {
  IconUser,
  IconUserCheck,
  IconHeartHandshake,
  IconDoor,
  IconCheckupList,
  IconBrandBooking,
  IconTicket,
} from "@tabler/icons-react";

const DashboardUserLinks = [
  {
    title: "Все пользователи",
    route: "/crm/user",
    icon: (
      <ActionIcon color="unicorn" variant="subtle">
        <IconUser stroke={1.5} />
      </ActionIcon>
    ),
  },
  {
    title: "Работники",
    route: "/crm/user",
    icon: (
      <ActionIcon color="unicorn" variant="subtle">
        <IconUserCheck stroke={1.5} />
      </ActionIcon>
    ),
  },
  {
    title: "Клиенты",
    route: "/crm/profile",
    icon: (
      <ActionIcon color="unicorn" variant="subtle">
        <IconHeartHandshake stroke={1.5} />
      </ActionIcon>
    ),
  },
];

const DashboardStudioLinks = [
  {
    title: "Кабинеты",
    route: "/crm/room",
    icon: (
      <ActionIcon color="unicorn" variant="subtle">
        <IconDoor stroke={1.5} />
      </ActionIcon>
    ),
  },
  {
    title: "Услуги",
    route: "/crm/service",
    icon: (
      <ActionIcon color="unicorn" variant="subtle">
        <IconCheckupList stroke={1.5} />
      </ActionIcon>
    ),
  },
  {
    title: "Бронирования",
    route: "/crm/booking",
    icon: (
      <ActionIcon color="unicorn" variant="subtle">
        <IconBrandBooking stroke={1.5} />
      </ActionIcon>
    ),
  },
  {
    title: "Абонементы",
    route: "/crm/abonnement",
    icon: (
      <ActionIcon color="unicorn" variant="subtle">
        <IconTicket stroke={1.5} />
      </ActionIcon>
    ),
  },
];

function DashboardItem({ item: { title, route, icon } }: any) {
  return (
    <Link
      href={route}
      className="rounded bg-gray-0 border border-gray-2 flex flex-col items-center py-4 gap-2"
    >
      {icon}
      <Text c="primary" size="sm">
        {title}
      </Text>
    </Link>
  );
}

export default async function Dashboard() {
  return (
    <BasePage title="Управление системой">
      <Text c="dimmed" size="sm" py={10}>
        Пользователи
      </Text>
      <div className="grid grid-cols-2 gap-2">
        {DashboardUserLinks.map((item) => {
          return <DashboardItem key={item.route} item={item} />;
        })}
      </div>

      <Text c="dimmed" size="sm" py={10}>
        Студия
      </Text>
      <div className="grid grid-cols-2 gap-2">
        {DashboardStudioLinks.map((item) => {
          return <DashboardItem key={item.route} item={item} />;
        })}
      </div>
    </BasePage>
  );
}
