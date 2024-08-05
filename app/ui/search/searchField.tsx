"use client";
import { TextInput, Button, Divider, Box } from "@mantine/core";
import { IconSearch } from '@tabler/icons-react';

interface Props {}

function SearchField() {
  return (
    <>
      <div className="flex items-end gap-3">
        <TextInput
          radius="md"
          className="w-full"
          withAsterisk
          description="Введите имя или email"
          placeholder="Поиск пользователя"
        />
        <div>
          <Button variant="light">Искать</Button>
        </div>
      </div>
      <Divider
        my="md"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <IconSearch size={12} />
            <Box ml={5}>Результаты поиска</Box>
          </>
        }
      />
    </>
  );
}

export { SearchField };
