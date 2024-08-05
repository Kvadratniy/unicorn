import { TextInput, Textarea, MultiSelect } from '@mantine/core';
import { createRoom } from '@/app/actions/roomActions';
import RoomForm from '../ui/RoomForm';
import Breadcrumbs from "@/app/ui/Breadcrumbs";

const items = [{ title: "CRM" }, { title: "Помещения", href: "/crm/room" }, { title: "Создание", href: "/crm/room/create" }];

export default async function Rooms() {

  const createUser = async (room) => {
    createRoom(room);
  }

  return <div className='flex flex-col gap-2 max-w-screen-lg'>
    <Breadcrumbs items={items} />
    <RoomForm onSubmit={createRoom} />
  </div>
}
