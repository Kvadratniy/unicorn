"use client";
import { Paper, Avatar, Group, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function ProfileListItem({ item }: { item: any }) {
  const router = useRouter();

  return (
    <Paper key={item.id} withBorder radius="md" p={10} onClick={() => router.push(`/crm/profile/${item.id}`)}>
      <Group>
        <Avatar src={item.image} alt="Jacob Warnhalter" radius="xl" />
        <div>
          <Text fz="sm">{item.name}</Text>
          <Text fz="xs" c="dimmed">
            {item.phone}
          </Text>
        </div>
      </Group>
    </Paper>
  );
}
