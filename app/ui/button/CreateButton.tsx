"use client";
import { Button } from "@mantine/core";

import { useRouter } from "next/navigation";

export default function CreateButton({ path }: any) {
  const router = useRouter();
  return (
    <Button
      variant="light"
      size="compact-sm"
      onClick={() => router.push(path)}
    >
      Добавить
    </Button>
  );
}
