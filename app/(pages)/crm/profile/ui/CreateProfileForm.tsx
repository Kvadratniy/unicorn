"use client";
import { useForm } from "@mantine/form";
import { Input, TextInput, Textarea, Group, Button } from "@mantine/core";
import { IMaskInput } from "react-imask";

export default function ProfileForm({ onSubmit }: any) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      phone: '',
      about: "",
    },
  });

  const action = async () => onSubmit(form.getValues());

  return (
    <form action={action}>
      <TextInput
        label="Имя клиента"
        placeholder="Имя Фамилия"
        withAsterisk
        key={form.key("name")}
        {...form.getInputProps("name")}
      />

      <Input.Wrapper
        label="Номер телефона"
      >
        <Input
          component={IMaskInput}
          mask="+7 (000) 000-00-00"
          placeholder="+7 (000) 000-00-00"
          key={form.key("phone")}
        {...form.getInputProps("phone")}
        />
      </Input.Wrapper>

      <Textarea
        label="Комментарий"
        withAsterisk
        placeholder="Внутренний комментарий"
        key={form.key("about")}
        {...form.getInputProps("about")}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Создать</Button>
      </Group>
      {/* {JSON.stringify(form)} */}
    </form>
  );
}
