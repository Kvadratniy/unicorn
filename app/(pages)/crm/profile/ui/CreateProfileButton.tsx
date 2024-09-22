"use client";
import { Button } from "@mantine/core";

import { useRouter } from "next/navigation";

export default function CreateProfileButton({ room }: any) {
  const router = useRouter();
  return (
    <Button
      variant="light"
      size="compact-sm"
      onClick={() => router.push("/crm/profile/create")}
    >
      Добавить
    </Button>
  );
}
