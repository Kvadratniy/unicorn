"use client";
import { useForm } from "@mantine/form";
import { TextInput, Textarea, Group, Button } from "@mantine/core";

export default function RoomForm({
	onSubmit
}: any) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      description: "",
    },

    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    // },
  });

	const action = async () => onSubmit(form.getValues())

  return (
    <form action={action}>
      <TextInput
        label="Наименование помещения"
        withAsterisk
        description="Наименование помещения"
        placeholder="Введите наименование"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />

      <Textarea
        label="Описание помещения"
        withAsterisk
        description="Краткое описание помещения"
        placeholder="Введите наименование"
        key={form.key("description")}
        {...form.getInputProps("description")}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Сохранить</Button>
      </Group>
			{/* {JSON.stringify(form)} */}
    </form>
  );
}
