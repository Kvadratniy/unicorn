"use server";

import { Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import { getUserById } from "@/app/actions/userActions";

export async function UserInfo({ id }: { id: number | string }) {
  const user = await getUserById({
    id: Number(id),
  });

  return (
    <div>
      <Group wrap="nowrap">
        <Avatar src={user?.image} size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            {user?.role}
          </Text>

          <Text fz="lg" fw={500} className="text-sm">
            {user?.name}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              {user?.email}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              {user?.email}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
