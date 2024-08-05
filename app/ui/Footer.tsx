"use client";
import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import Image from "next/image";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { FooterLinks } from "@/app/lib/const";
import Link from 'next/link'

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

  return (
    <footer className="flex flex-col px-xl">
      <div className="flex justify-between py-xl border-1 border-t border-gray-200">
        <div>
          <Image alt="123" src="/logo2.png" width={180} height={27} priority />
          <Text size="xs" c="dimmed" className="mt-1">
            Современный дом культуры
          </Text>
        </div>
        <div className="flex gap">{linksGroup}</div>
      </div>
      <div className="flex justify-between items-center py-md border-1 border-t border-gray-200">
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
      </div>
    </footer>
  );
}
