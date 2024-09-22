"use client";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Select,
  Group,
  Button,
  NumberInput,
  MultiSelect,
} from "@mantine/core";
import { type AbonnementType } from "@prisma/client";

type AbonnementTypeDTO = Pick<
  AbonnementType,
  "name" | "price" | "numberOfLessons" | "monthDuration"
> & { serviceIds: number[] };

interface PropsAbonnementForm {
  title?: string;
  onSubmit: (
    data: Pick<
      AbonnementType,
      "name" | "price" | "numberOfLessons" | "monthDuration"
    >,
    serviceIds: number[]
  ) => Promise<void>;
  services: { value: string; label: string }[];
}

type AbonnementFormInitValues = {
  [K in keyof AbonnementTypeDTO]: AbonnementTypeDTO[K] | null;
};

export default function AbonnementForm({
  onSubmit,
  services,
}: PropsAbonnementForm) {
  const form = useForm<AbonnementFormInitValues>({
    mode: "uncontrolled",
    initialValues: {
      name: null,
      price: null,
      numberOfLessons: null,
      monthDuration: null,
      serviceIds: [],
    },
    validate: {
      // @ts-ignore
      name: (value: string) => (value ? null : "Name is required"),
      // @ts-ignore
      price: (value: string) => (value ? null : "Price is required"),
      // @ts-ignore
      monthDuration: (value: string) =>
        value ? null : "Month duration is required",
    },
  });

  const action = async () => {
    if (form.validate().hasErrors) return;
    const data = form.getValues() as AbonnementTypeDTO;
    onSubmit(
      {
        name: data.name,
        price: data.price,
        numberOfLessons: data.numberOfLessons,
        monthDuration: data.monthDuration,
      },
      data.serviceIds.map((id) => Number(id))
    );
  };

  return (
    <form action={action} className="flex flex-col gap-1">
      <div className="grid grid-cols-1 gap-3">
        <TextInput
          withAsterisk
          description="Наименование абонемента"
          placeholder="Наименование"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        {JSON.stringify(services)}
        <MultiSelect
          className="w-full"
          label="Выберите услуги"
          data={services}
          key={form.key("serviceIds")}
          {...form.getInputProps("serviceIds")}
        />

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
