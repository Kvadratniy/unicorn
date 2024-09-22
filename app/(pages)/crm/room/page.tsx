import { getAllLocations } from "@/app/actions/roomActions";
import RoomCart from "./ui/RoomCart";
import { Divider, Anchor } from "@mantine/core";
import BasePage from "@/app/ui/BasePage";
import CreateButton from "@/app/ui/button/CreateButton";

const items = [{ title: "CRM" }, { title: "Помещения", href: "/crm/room" }];

export default async function Rooms() {
  const rooms = await getAllLocations();

  return (
    <BasePage title="Помещения" action={<CreateButton path="/crm/room/create"/>}>
      <div className="gap-4 grid 2xl:grid-cols-5 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
        {rooms.map((room: any, key: any) => {
          return <RoomCart key={key} room={room} />;
        })}
      </div>
    </BasePage>
  );
}
