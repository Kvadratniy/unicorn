import { createService } from "@/app/actions/serviceActions";
import { getRoomsSelect } from "@/app/actions/roomActions";
import ServiceForm from "../ui/ServiceForm";
import Breadcrumbs from "@/app/ui/Breadcrumbs";

export default async function Abonement() {
  const rooms = await getRoomsSelect();

  return (
    <div className="flex flex-col gap-2 max-w-screen-lg">
      <Breadcrumbs
        items={[
          { title: "CRM" },
          { title: "Услуги", href: "/crm/service" },
          { title: "Создание", href: "/crm/service/create" },
        ]}
      />
      <ServiceForm onSubmit={createService} rooms={rooms} />
    </div>
  );
}
