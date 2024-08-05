"use client";
import { Card, Image, Text, Badge, Button, Group, Menu, ActionIcon, SimpleGrid, rem} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

export default function RoomCart({ room }) {
  return (
    <Card shadow="sm" radius="md" withBorder>
			<Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>{room.name}</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip style={{ width: rem(14), height: rem(14) }} />}>
                Редактировать
              </Menu.Item>
              <Menu.Item leftSection={<IconEye style={{ width: rem(14), height: rem(14) }} />}>
                Бронирования
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                color="red"
              >
                Удалить
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>


      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>
			<Text mt="md" c="dimmed" size="sm">
        <Text span inherit >
					{room.description}
        </Text>
        <Text span inherit >
					{room.services.map((item) => item.name)}
        </Text>{' '}
      </Text>
    </Card>
  );
}
