import { getServices } from "@/app/actions/serviceActions";
import { BaseTable } from "@/app/ui/table/BaseTable";
import Breadcrumbs from "@/app/ui/Breadcrumbs";
import {
  Paper,
  Avatar,
  Group,
  Text,
  Card,
  Divider,
  Badge,
} from "@mantine/core";
import BasePage from "@/app/ui/BasePage";
import CreateButton from "@/app/ui/button/CreateButton";


export default async function ServicesPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    search?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const services = await getServices({
    page,
    pageSize: 10,
    search,
  });

  const struct: ColStruct[] = [
    {
      header: "ID",
      cell: {
        name: "Text",
        fields: {
          value: "id",
        },
      },
    },
    {
      header: "Услуга",
      cell: {
        name: "Text",
        fields: {
          value: "name",
        },
      },
    },
    {
      header: "Описание",
      cell: {
        name: "Text",
        fields: {
          value: "description",
        },
      },
    },
    {
      header: "Кабинет",
      cell: {
        name: "Rooms",
        fields: {
          value: "rooms",
        },
      },
    },
  ];

  return (
    <BasePage title="Услуги" action={<CreateButton path="/crm/service/create"/>}>
      <div className="flex flex-col gap-3">
        {services.items.map((item) => (
          //  <Card shadow="xs" radius="md" withBorder></Card>
          <Card shadow="xs" radius="md" withBorder key={item.id} p={10}>
            <Group wrap="nowrap" align="start">
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
                alt="Jacob Warnhalter"
                radius="xl"
              />
              <div>
                <Text fz="sm" fw={500}>{item.name}</Text>
                <Text fz="xs" c="dimmed">
                  {item.description}
                </Text>
                {/* {item.rooms.map((el, i) => (
                  <Badge key={i} variant="light">
                    {el.name}
                  </Badge>
                ))} */}
                {/* {item.rooms.map((el, i) => (
                  <Badge key={i} variant="light">
                    {el.name}
                  </Badge>
                ))}
                {item.rooms.map((el, i) => (
                  <Badge key={i} variant="light">
                    {el.name}
                  </Badge>
                ))}
                {item.rooms.map((el, i) => (
                  <Badge key={i} variant="light">
                    {el.name}
                  </Badge>
                ))} */}
              </div>
            </Group>
          </Card>
        ))}
      </div>
    </BasePage>
  );
}
