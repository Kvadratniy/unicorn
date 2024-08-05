"use client";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Select,
  Group,
  Button,
  NumberInput,
  Divider,
} from "@mantine/core";
import { type AbonementType } from "@prisma/client";

type AbonementTypeDTO = Pick<
  AbonementType,
  "name" | "price" | "numberOfLessons" | "monthDuration" | "serviceId"
>;

interface PropsAbonnementForm {
  title?: string;
  onSubmit: (data: AbonementTypeDTO) => Promise<void>;
  services: { value: string; label: string }[];
}

type AbonementFormInitValues = {
  [K in keyof AbonementTypeDTO]: AbonementTypeDTO[K] | null;
};

export default function AbonnementForm({
  onSubmit,
  services,
  title = "Создание абонемента",
}: PropsAbonnementForm) {
  const form = useForm<AbonementFormInitValues>({
    mode: "uncontrolled",
    initialValues: {
      name: null,
      price: null,
      numberOfLessons: null,
      monthDuration: null,
      serviceId: null,
    },
    validate: {
      name: (value) => (value ? null : "Name is required"),
      price: (value) => (value ? null : "Price is required"),
      monthDuration: (value) => (value ? null : "Month duration is required"),
      serviceId: (value) => (value ? null : "Service is required"),
    },
  });

  const action = async () => {
    if (form.validate().hasErrors) return;
    const data = form.getValues() as AbonementTypeDTO;
    onSubmit({
      ...data,
      serviceId: Number(data.serviceId),
    });
  };

  return (
    <form action={action} className="flex flex-col gap-1">
      <span className="text-gray-800 text-lg font-bold">{title}</span>
      <Divider variant="dashed" className="pb-3" />
      <div className="grid grid-cols-2 gap-3">
        <TextInput
          withAsterisk
          description="Наименование абонемента"
          placeholder="Наименование"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <Select
          className="w-full"
          description="Выберите услугу"
          withAsterisk
          placeholder="Услуга"
          data={services}
          key={form.key("serviceId")}
          {...form.getInputProps("serviceId")}
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <NumberInput
          description="Количество уроков"
          placeholder="Количество уроков"
          key={form.key("numberOfLessons")}
          {...form.getInputProps("numberOfLessons")}
        />

        <NumberInput
          withAsterisk
          description="Срок абонемента"
          placeholder="Количество месяцев"
          key={form.key("monthDuration")}
          {...form.getInputProps("monthDuration")}
        />
        <NumberInput
          withAsterisk
          description="Стоимость абонемента, руб"
          placeholder="Стоимость"
          key={form.key("price")}
          {...form.getInputProps("price")}
        />
      </div>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Сохранить</Button>
      </Group>
    </form>
  );
}
