import { getUsers } from "@/app/actions/userActions";
import { BaseTable } from "@/app/ui/table/BaseTable";
import Breadcrumbs from "@/app/ui/Breadcrumbs";
import { Divider } from "@mantine/core";

export default async function Account({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    search?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const users = await getUsers({
    page,
    pageSize: 10,
    search,
  });

  const struct: ColStruct[] = [
    {
      header: "Пользователь",
      cell: {
        name: "Avatar",
        fields: {
          avatar: "avatar",
          name: "name",
        },
      },
    },
    {
      header: "Имя",
      cell: {
        name: "Text",
        fields: {
          value: "name",
        },
      },
    },
    {
      header: "Роль",
      cell: {
        name: "Badge",
        fields: {
          value: "role",
        },
      },
    },
    {
      header: "Email",
      cell: {
        name: "Text",
        fields: {
          value: "email",
        },
      },
    },
    {
      header: "",
      cell: {
        name: "Open",
        fields: {
          value: "id",
        },
      },
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[{ title: "CRM" }, { title: "Пользователи", href: "/crm/user" }]}
      />
      <Divider variant="dashed" className="pb-4" />
      <BaseTable
        keyProperty="id"
        struct={struct}
        items={users.items}
        total={users.totalPages}
        currentPage={users.currentPage}
      />
    </>
  );
}
