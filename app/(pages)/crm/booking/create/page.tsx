import { TextInput, Textarea, MultiSelect } from '@mantine/core';
// import { createRoom } from '@/app/actions/bookingActions';
import BookingForm from '../ui/BookingForm';
import Breadcrumbs from "@/app/ui/Breadcrumbs";
import { getServiceSelect } from '@/app/actions/serviceActions';

const items = [{ title: "CRM" }, { title: "Бронирование", href: "/crm/booking" }, { title: "Создание", href: "/crm/booking/create" }];

export default async function CreateBooking() {
  const services = await getServiceSelect();
  return <div className='flex flex-col gap-2 max-w-screen-lg'>
    <Breadcrumbs items={items} />
    <BookingForm services={services}/>
  </div>
}
