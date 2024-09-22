import { TextInput, Textarea, MultiSelect } from "@mantine/core";
// import { createRoom } from '@/app/actions/bookingActions';
import BookingForm from "../ui/BookingForm";
import { getBookings } from "@/app/actions/bookingActions";
import { getServiceSelect } from "@/app/actions/serviceActions";
import BasePage from "@/app/ui/BasePage";

export default async function CreateBooking() {
  const services = await getServiceSelect();
  return (
    <BasePage title="Создание бронирования">
      <BookingForm services={services} />
    </BasePage>
  );
}
