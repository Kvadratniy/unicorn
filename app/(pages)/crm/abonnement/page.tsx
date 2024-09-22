import BasePage from "@/app/ui/BasePage";
import { getAbonnementTypes } from "@/app/actions/abonnementActions";
import CreateButton from "@/app/ui/button/CreateButton";
import { Card, Text } from "@mantine/core";

export default async function Abonnement({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    search?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const abonnements = await getAbonnementTypes({
    page,
    pageSize: 10,
  });

  return (
    <BasePage
      title="Абонементы"
      action={<CreateButton path="/crm/abonnement/create" />}
    >
      <div className="flex flex-col gap-2">
        {abonnements.items.map((item) => {
          return (
            <Card key={item.id} shadow="xs" radius="md" withBorder>
              <Text fw={500}>{item.name}</Text>
              {JSON.stringify(item)}
            </Card>
          );
        })}
      </div>
    </BasePage>
  );
}
