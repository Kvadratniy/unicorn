import { getBookings } from "@/app/actions/bookingActions";
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
  const bookings = await getBookings({
    page,
    pageSize: 10,
  });

  const struct: ColStruct[] = [
    {
      header: "id",
      cell: {
        name: "Text",
        fields: {
          value: "id",
        },
      },
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[{ title: "CRM" }, { title: "Бронирования", href: "/crm/booking" }]}
      />
      <div className="flex items-center gap-2 pb-2">
        <div className="text-sm text-gray-500">Функции:</div>
        <Anchor size="sm" href="/crm/booking/create">
          Новое бронирование
        </Anchor>
      </div>
      <Divider variant="dashed" className="pb-4" />
      <BaseTable
        keyProperty="id"
        struct={struct}
        items={bookings.items}
        total={bookings.totalPages}
        currentPage={bookings.currentPage}
      />
    </>
  );
}
