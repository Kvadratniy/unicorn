import { getServices } from "@/app/actions/serviceActions";
import { BaseTable } from "@/app/ui/table/BaseTable";
import Breadcrumbs from "@/app/ui/Breadcrumbs";
import { Divider, Anchor } from "@mantine/core";

const breadcrumbsItems = [
  { title: "CRM" },
  { title: "Услуги", href: "/crm/service" },
];

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
    <>
      <Breadcrumbs items={breadcrumbsItems} />
      <div className="flex items-center gap-2 pb-2">
        <div className="text-sm text-gray-500">Функции:</div>
        <Anchor size="sm" href="/crm/service/create">
          Новая услуга
        </Anchor>
      </div>
      <Divider variant="dashed" className="pb-1" />
      <BaseTable
        keyProperty="id"
        struct={struct}
        items={services.items}
        total={services.totalPages}
        currentPage={services.currentPage}
      />
    </>
  );
}
