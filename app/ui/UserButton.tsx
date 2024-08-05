"use  client";
import { Avatar, Text, Button, Menu, rem } from "@mantine/core";
import { useSession, signIn } from "next-auth/react";
import {
  IconEaseOut,
  IconMessages,
  IconNote,
  IconReportAnalytics,
  IconTrash,
  IconDots,
} from '@tabler/icons-react';

export default function UserButton() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button variant="default" onClick={() => signIn("google")}>
        Авторизация
      </Button>
    );
  }

  return (
    <Menu
      trigger="click-hover"
      transitionProps={{ transition: "pop" }}
      position="bottom-end"
      withinPortal
    >
      <Menu.Target>
        <div className="w-full flex gap-2 text-black hover:text-gray-900 cursor-pointer">
          <div className="flex-1 text-right">
            <Text size="sm" fw={500}>
              {session.user?.name}
            </Text>
            <Text c="dimmed" size="xs">
              {session.user?.email}
            </Text>
          </div>
          <Avatar src={session.user?.image} radius="md" />
        </div>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>CRM</Menu.Label>
        <Menu.Divider />
        <Menu.Item
          leftSection={
            <IconMessages
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Send message
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconNote
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Add note
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconReportAnalytics
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
        >
          Analytics
        </Menu.Item>
        <Menu.Item
          leftSection={
            <IconEaseOut
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          }
          color="red"
        >
          Выйти
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
