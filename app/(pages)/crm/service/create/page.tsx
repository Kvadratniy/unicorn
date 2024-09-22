import { createService } from "@/app/actions/serviceActions";
import { getLocationsSelect } from "@/app/actions/roomActions";
import ServiceForm from "../ui/ServiceForm";
import BasePage from "@/app/ui/BasePage";

export default async function Abonement() {
  const rooms = await getLocationsSelect();

  return (
    <BasePage title="Создание услуги">
      <ServiceForm onSubmit={createService} rooms={rooms} />
    </BasePage>
  );
}
