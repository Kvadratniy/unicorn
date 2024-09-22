import BasePage from "@/app/ui/BasePage";
import CreateProfileForm from '../ui/CreateProfileForm';
import { createProfile } from '@/app/actions/profileActions';

export default async function ProfileCreate() {

  return (
    <BasePage title="Создание профиля" >
      <CreateProfileForm onSubmit={createProfile}/>
    </BasePage>
  );
}
