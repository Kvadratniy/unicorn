"use client";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Textarea,
  Select,
  Group,
  Button,
} from "@mantine/core";
import { type Service } from "@prisma/client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type ServiceDTO = Pick<Service, "name" | "description"> & { locationId: number};

interface PropsServiceForm {
  title?: string;
  onSubmit: (data: ServiceDTO) => Promise<void>;
  rooms: { value: string; label: string }[];
}

type ServiceFormInitValues = {
  [K in keyof ServiceDTO]: ServiceDTO[K] | null;
};

export default function ServiceForm({
  title = "Создание услуги",
  onSubmit,
  rooms,
}: PropsServiceForm) {
  const pathname = usePathname();
  const router = useRouter();
  const form = useForm<ServiceFormInitValues>({
    mode: "uncontrolled",
    initialValues: {
      name: '',
      description: '',
      locationId: null,
    },
    validate: {
      name: (value) => (value ? null : "Name is required"),
      locationId: (value) => (value ? null : "locationId is required"),
    },
  });

  const action = async () => {
    if (form.validate().hasErrors) return;
    const data = form.getValues() as ServiceDTO;
    await onSubmit({
      ...data,
      locationId: Number(data.locationId),
    });
    router.push(pathname.split('/').slice(0, -1).join('/'));
  };

  return (
    <form action={action} className="flex flex-col gap-1">
      <div className="flex flex-col gap-2 max-w-screen-sm">
        <TextInput
          withAsterisk
          description="Наименование услуги"
          placeholder="Наименование"
          key={form.key("name")}
          {...form.getInputProps("name")}
        />
        <Select
          className="w-full"
          description="Выберите помещение"
          searchable
          placeholder="Помещение"
          data={rooms}
          key={form.key("locationId")}
          {...form.getInputProps("locationId")}
        />
        <Textarea
            autosize
          withAsterisk
          resize="vertical"
          description="Описание услуги"
          placeholder="Описание"
          key={form.key("description")}
          {...form.getInputProps("description")}
        />
      </div>

      <Group justify="flex" mt="md">
        <Button type="submit">Сохранить</Button>
      </Group>
    </form>
  );
}
