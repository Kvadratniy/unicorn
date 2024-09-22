import BasePage from "@/app/ui/BasePage";
import AbonnementForm from '../ui/AbonnementForm';
import { getServiceSelect } from '@/app/actions/serviceActions';
import { createAbonnementType } from '@/app/actions/abonnementActions';

export default async function AbonnementCreate() {

  const services = await getServiceSelect();
  return (
    <BasePage title="Создание абонемента" >
      <AbonnementForm onSubmit={createAbonnementType} services={services}/>
    </BasePage>
  );
}
