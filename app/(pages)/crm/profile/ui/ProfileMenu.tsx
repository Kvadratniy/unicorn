"use client";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Menu,
  ActionIcon,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";

export default function ProfileMenu() {
  <Menu withinPortal position="bottom-end" shadow="sm">
    <Menu.Target>
      <ActionIcon variant="subtle" color="gray">
        <IconDots style={{ width: rem(16), height: rem(16) }} />
      </ActionIcon>
    </Menu.Target>

    <Menu.Dropdown>
      <Menu.Item
        leftSection={
          <IconFileZip style={{ width: rem(14), height: rem(14) }} />
        }
      >
        Редактировать
      </Menu.Item>
      <Menu.Item
        leftSection={<IconEye style={{ width: rem(14), height: rem(14) }} />}
      >
        Бронирования
      </Menu.Item>
      <Menu.Item
        leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
        color="red"
      >
        Удалить
      </Menu.Item>
    </Menu.Dropdown>
  </Menu>;
}
