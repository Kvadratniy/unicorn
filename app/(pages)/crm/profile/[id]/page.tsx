import BasePage from "@/app/ui/BasePage";
import { Avatar, Text, Group, Divider } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import { getProfileById } from "@/app/actions/profileActions";
import ProfileAccordion from "../ui/ProfileAccordion";

export default async function ProfileId({ params }: any) {
  const { id } = params;
  const profile = await getProfileById(Number(id));

  return (
    <BasePage title="Профиль">
      <Group wrap="nowrap">
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          size={94}
          radius="md"
        />
        <div>
          {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Software engineer
          </Text> */}

          <Text fz="lg" fw={500}>
            {profile?.name}
          </Text>

          {/* <Group wrap="nowrap" gap={10} mt={3}>
            <IconAt stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              robert@glassbreaker.io
            </Text>
          </Group> */}

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" />
            <Text fz="xs" c="dimmed">
              {profile?.phone}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <Text fz="xs" c="dimmed">
              Аккаунт не привязан
            </Text>
          </Group>
        </div>
      </Group>
      <div className="py-2">
        <Divider />
      </div>

      <ProfileAccordion />
    </BasePage>
  );
}
