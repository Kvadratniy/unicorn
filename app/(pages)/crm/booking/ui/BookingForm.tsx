"use client";
import { useForm } from "@mantine/form";
import { TextInput, Select, Group, Button } from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";

export default function BookingForm({
  services
}) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      comment: "",
      startDate: "",
      endDate: "",
      creatorId: "",
      roomId: "",
      serviceId: "",
    },
  });

  const action = async () => console.log(form.getValues());

  return (
    <form action={action}>
      <TextInput
        label="Коммент"
        withAsterisk
        description="Коммент"
        placeholder="Коммент"
        key={form.key("comment")}
        {...form.getInputProps("comment")}
      />
      <Select
          className="w-full"
          label="Выберите услугу"
          withAsterisk
          placeholder="Выберите услугу"
          data={services}
          key={form.key("serviceId")}
          {...form.getInputProps("serviceId")}
        />
      <DateTimePicker
        label="Pick startDate"
        placeholder="Pick startDate"
        key={form.key("startDate")}
        {...form.getInputProps("startDate")}
      />
      <DateTimePicker
        label="Pick endDate"
        placeholder="Pick endDate"
        key={form.key("endDate")}
        {...form.getInputProps("endDate")}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit">Сохранить</Button>
      </Group>
      {JSON.stringify(form)}
    </form>
  );
}
