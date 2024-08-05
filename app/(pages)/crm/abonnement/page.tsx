import { getAbonnementTypes } from "@/app/actions/abonnementActions";
import { BaseTable } from "@/app/ui/table/BaseTable";
import Breadcrumbs from "@/app/ui/Breadcrumbs";
import { Anchor, Divider } from "@mantine/core";

export default async function Account({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const abonnements = await getAbonnementTypes({
    page,
    pageSize: 10,
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
      header: "Наименование",
      cell: {
        name: "Text",
        fields: {
          value: "name",
        },
      },
    },
    {
      header: "Кол-во уроков",
      cell: {
        name: "Text",
        fields: {
          value: "numberOfLessons",
        },
      },
    },
    {
      header: "Длительность, мес",
      cell: {
        name: "Text",
        fields: {
          value: "monthDuration",
        },
      },
    },
    {
      header: "Услуга",
      cell: {
        name: "NameInObject",
        fields: {
          value: "service",
        },
      },
    },
    {
      header: "Цена",
      cell: {
        name: "Price",
        fields: {
          value: "price",
        },
      },
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[{ title: "CRM" }, { title: "Абонементы", href: "/crm/abonnement" }]}
      />
      <div className="flex items-center gap-2 pb-2">
        <div className="text-sm text-gray-500">Функции:</div>
        <Anchor size="sm" href="/crm/abonnement/create">
          Новый абонемент
        </Anchor>
      </div>
      <Divider variant="dashed"/>
      <BaseTable
        keyProperty="id"
        struct={struct}
        items={abonnements.items}
        total={abonnements.totalPages}
        currentPage={abonnements.currentPage}
      />
    </>
  );
}
