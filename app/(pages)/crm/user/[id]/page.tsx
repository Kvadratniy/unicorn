import Breadcrumbs from "@/app/ui/Breadcrumbs";
import { UserInfo } from "../ui/UserInfo";
// import { getUserById } from "@/app/actions/userActions";
import { Divider } from "@mantine/core";
import Link from "next/link";
export default async function UserProfile({
  params,
}: {
  params: { id: string };
}) {
  // const user = await getUserById({
  //   id: Number( params.id),
  // });

  return (
    <>
      <Breadcrumbs
        items={[
          { title: "CRM" },
          { title: "Пользователи", href: "/crm/user" },
          {
            title: params.id?.toString() || "Пользователь",
            href: `/crm/user/${params.id}`,
          },
        ]}
      />

      <div className="flex items-center gap-2 pb-2">
        <div className="text-sm text-gray-500">Функции:</div>
        <Link href="/test" className="text-sm text-link hover:underline">
          Новый modal
        </Link>
      </div>

      <div>
        <UserInfo id={params.id} />
        <div>Абонементы</div>
        <div>Бронирования</div>
        <div>Заверщенные визиты</div>
      </div>
    </>
  );
}
