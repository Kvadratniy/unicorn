import { getAllRooms } from "@/app/actions/roomActions";
import RoomCart from "./ui/RoomCart";
import { Divider, Anchor } from "@mantine/core";
import Breadcrumbs from "@/app/ui/Breadcrumbs";

const items = [{ title: "CRM" }, { title: "Помещения", href: "/crm/room" }];

export default async function Rooms() {
  const rooms = await getAllRooms();

  return (
    <>
      <Breadcrumbs items={items} />
      <div className="flex items-center gap-2 pb-2">
        <div className="text-sm text-gray-500">Функции:</div>
        <Anchor size="sm" href="/crm/room/create">
          Новое помещение
        </Anchor>
      </div>
      <Divider variant="dashed" className="pb-4" />
      <div className="gap-4 grid 2xl:grid-cols-5 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
        {rooms.map((room, key) => {
          return <RoomCart key={key} room={room} />;
        })}
      </div>
    </>
  );
}
