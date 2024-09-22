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

export default function RoomCart({ room }: any) {
  return (
    <Card shadow="xs" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py={4}>
        <Group justify="space-between">
          <Text fw={500}>{room.name}</Text>
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
                leftSection={
                  <IconEye style={{ width: rem(14), height: rem(14) }} />
                }
              >
                Бронирования
              </Menu.Item>
              <Menu.Item
                leftSection={
                  <IconTrash style={{ width: rem(14), height: rem(14) }} />
                }
                color="red"
              >
                Удалить
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>
      <Card.Section withBorder inheritPadding>
        <Group gap="4" py={8}>
          <Text c="dimmed" size="sm" span>
            Услуги:
          </Text>
          {room.services.map((item: any,) => (<Badge variant="outline" size="xs" key={item.id}>{item.name}</Badge>))}
        </Group>
      </Card.Section>
    </Card>
  );
}
