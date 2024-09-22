import { getUsers } from "@/app/actions/userActions";
import { BaseTable } from "@/app/ui/table/BaseTable";
import Breadcrumbs from "@/app/ui/Breadcrumbs";
import { Paper, Avatar, Group, Text } from "@mantine/core";
import BasePage from "@/app/ui/BasePage";

export default async function Account({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    search?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const users = await getUsers({
    page,
    pageSize: 2,
    search,
  });

  const struct: ColStruct[] = [
    {
      header: "Пользователь",
      cell: {
        name: "Avatar",
        fields: {
          avatar: "avatar",
          name: "name",
        },
      },
    },
    {
      header: "Имя",
      cell: {
        name: "Text",
        fields: {
          value: "name",
        },
      },
    },
    {
      header: "Роль",
      cell: {
        name: "Badge",
        fields: {
          value: "role",
        },
      },
    },
    {
      header: "Email",
      cell: {
        name: "Text",
        fields: {
          value: "email",
        },
      },
    },
    {
      header: "",
      cell: {
        name: "Open",
        fields: {
          value: "id",
        },
      },
    },
  ];

  return (
    <BasePage title="Пользователи">
      <div className="flex flex-col gap-3">
        {/* { JSON.stringify(users.items)} */}
        {users.items.map((item, key) => (
          <Paper key={item.id} withBorder radius="md" p={10}>
            <Group>
              <Avatar src={item.image} alt="Jacob Warnhalter" radius="xl" />
              <div>
                <Text fz="sm">{item.name}</Text>
                <Text fz="xs" c="dimmed">
                  {item.email}
                </Text>
                {/* <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                  {item?.role}
                </Text> */}
              </div>
            </Group>
          </Paper>
        ))}
      </div>
    </BasePage>
  );
}
