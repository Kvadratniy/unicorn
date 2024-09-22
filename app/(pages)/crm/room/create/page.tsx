import { createLocation } from '@/app/actions/roomActions';
import RoomForm from '../ui/RoomForm';
import BasePage from "@/app/ui/BasePage";

export default async function Rooms() {

  return <BasePage title="Создание помещения">
    <RoomForm onSubmit={createLocation} />
  </BasePage>
}
