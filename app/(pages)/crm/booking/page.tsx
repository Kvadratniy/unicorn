import { getBookings } from "@/app/actions/bookingActions";
import { BaseTable } from "@/app/ui/table/BaseTable";
import Breadcrumbs from "@/app/ui/Breadcrumbs";
import { Anchor, Divider } from "@mantine/core";
import BasePage from "@/app/ui/BasePage";

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


  return (
    <BasePage title="Бронирования">
      <div className="flex items-center gap-2 pb-2">
        <div className="text-sm text-gray-500">Функции:</div>
        <Anchor size="sm" href="/crm/booking/create">
          Новое бронирование
        </Anchor>
      </div>
      <Divider variant="dashed" className="pb-4" />
    </BasePage>
  );
}
