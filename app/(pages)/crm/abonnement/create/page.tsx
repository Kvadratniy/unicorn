import { createAbonnementType } from '@/app/actions/abonnementActions';
import { getServiceSelect } from '@/app/actions/serviceActions';
import AbonnementForm from '../ui/AbonnementForm';
import Breadcrumbs from "@/app/ui/Breadcrumbs";

const items = [{ title: "CRM" }, { title: "Абонементы", href: "/crm/abonnement" }, { title: "Создание", href: "/crm/abonnement/create" }];

export default async function Abonement() {
  const services = await getServiceSelect();

  return <div className='flex flex-col gap-2 max-w-screen-lg'>
    <Breadcrumbs items={items} />
    <AbonnementForm onSubmit={createAbonnementType} services={services}/>
  </div>
}
