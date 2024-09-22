import BasePage from "@/app/ui/BasePage";
import Image from "next/image";
import { Title, Text, ThemeIcon, Timeline } from "@mantine/core";
import { GoogleButton } from "@/app/ui/button/GoogleButton";

export default function Login() {
  return (
    <BasePage>
      <div className="flex flex-col items-center justify-center py-4 gap-6 h-svh">
        <Image src="/logo2.png" width={150} height={50} priority alt={""} />
        <div className="flex flex-col items-center gap-3">
          <Title order={3} c="dark" fw={300}>
            Авторизуйтесь с помощью:
          </Title>
          <GoogleButton size="lg" radius={50} px={30}>
            Google
          </GoogleButton>
        </div>
      </div>
    </BasePage>
  );
}
