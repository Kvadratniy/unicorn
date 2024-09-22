"use client";
import { Text, Avatar, ActionIcon, Group, Paper, Button } from "@mantine/core";
import Image from "next/image";
import {
  IconApps,
  IconHomeStar,
  IconMenu,
  IconCalendarTime,
} from "@tabler/icons-react";
import { FooterLinks } from "@/app/lib/const";
import Link from "next/link";
import { BottomSheet } from "react-spring-bottom-sheet";
import { NavbarMenu } from "@/app/ui/navbar/NavbarMenu";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

function UserPanel() {
  const { data: session } = useSession();
  if (!session?.user) return;
  return (
    <Group wrap="nowrap" p="md" align="start">
      <Avatar src={session.user.image} size={80} radius="md" />
      <div className="py-1 ">
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          {session.user.name}
        </Text>
        <Text fz="xs" fw={500}>
          {session.user.email}
        </Text>
        <Button size="xs" variant="light" mt={8} onClick={() => signOut()}>
          Выйти
        </Button>
      </div>
    </Group>
  );
}

export default function FooterComponent() {
  const linksGroup = FooterLinks.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        href={link.link}
        className="text-gray-900 hover:text-gray-600 text-sm"
      >
        {link.label}
      </Link>
    ));

    return (
      <div className="w-[160px] flex flex-col gap-1" key={group.title}>
        <span className="uppercase text-gray-400">{group.title}</span>
        {links}
      </div>
    );
  });

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const isa = false;

  return (
    <>
      <BottomSheet open={isMenuOpened} onDismiss={() => setIsMenuOpened(false)}>
        <UserPanel />
        {/* <Group wrap="nowrap" p="md">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png"
            size={94}
            radius="md"
          />
          <div>
            <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
              Admin
            </Text>

            <Text fz="lg" fw={500}>
              User name
            </Text>
          </div>
        </Group> */}
        {/* <NavbarMenu /> */}
      </BottomSheet>
      <footer className="w-full flex justify-between border-1 border-t border-gray-200 px-6 pb-6 pt-3 bg-white">
        <Link
          href="/"
          className="flex flex-col justify-between items-center text-gray-900 hover:text-gray-600 text-sm"
        >
          <ActionIcon color="gray" variant="subtle">
            <IconHomeStar stroke={1.5} />
          </ActionIcon>
          {/* <div>Главная</div> */}
        </Link>

        <Link
          href="/crm/schedule"
          className="flex flex-col justify-between items-center text-gray-900 hover:text-gray-600 text-sm"
        >
          <ActionIcon color="gray" variant="subtle">
            <IconCalendarTime stroke={1.5} />
          </ActionIcon>
          {/* <div>Запись</div> */}
        </Link>

        <Link
          href="/crm/dashboard"
          className="flex flex-col justify-between items-center text-gray-900 hover:text-gray-600 text-sm"
        >
          <ActionIcon color="gray" variant="subtle">
            <IconApps stroke={1.5} />
          </ActionIcon>
          {/* <div>График</div> */}
        </Link>

        <div
          onClick={() => setIsMenuOpened(true)}
          className="flex flex-col justify-between items-center text-gray-900 hover:text-gray-600 text-sm"
        >
          <ActionIcon color="gray" variant="subtle">
            <IconMenu stroke={1.5} />
          </ActionIcon>
          {/* <div>Меню</div> */}
        </div>

        {/* <div className="flex flex-col justify-between items-center">
          
          <ActionIcon color="gray" variant="subtle">
            <IconList stroke={1.5} />
          </ActionIcon>
          <div>menu</div>
        </div> */}
        {/* <div className="flex justify-between py-xl border-1 border-t border-gray-200">
          <div>
            <Image alt="123" src="/logo2.png" width={180} height={27} priority />
            <Text size="xs" c="dimmed" className="mt-1">
              Современный дом культуры
            </Text>
          </div>
          <div className="flex gap">{linksGroup}</div>
        </div> */}
        {/* <div className="flex justify-between items-center py-md border-1 border-t border-gray-200">
          <Text c="dimmed" size="sm">
            © 2024 Unicorn
          </Text>

          <div className="flex gap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </div>
        </div> */}
      </footer>
    </>
  );
}
