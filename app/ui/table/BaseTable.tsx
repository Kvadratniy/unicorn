"use client";
import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  Pagination,
  ActionIcon,
  rem,
  NumberFormatter,
} from "@mantine/core";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import Link from "next/link";

const jobColors: Record<string, string> = {
  ADMIN: "blue",
  WORKER: "cyan",
  CLIENT: "pink",
};

const cellNameInObject = (item: any, structEl: ColStruct) => {
  const obj = item[structEl.cell.fields["value"]] as { name: string };

  return (
    <>
      <Badge variant="light">{obj.name}</Badge>
    </>
  );
};

const cellNameInObjects = (item: any, structEl: ColStruct) => {
  const obj = item[structEl.cell.fields["value"]] as Array<{ name: string }>;

  return (
    <>
      {obj.map((el, i) => (
        <Badge key={i} variant="light">
          {el.name}
        </Badge>
      ))}
    </>
  );
};

const cellAvatar = (item: any, structEl: ColStruct) => {
  return (
    <Group gap="sm">
      <Avatar
        size={30}
        src={item[structEl.cell.fields["avatar"]]}
        radius={30}
      />
      <Text fz="sm" fw={500}>
        {item[structEl.cell.fields["name"]]}
      </Text>
    </Group>
  );
};

const cellText = (item: any, structEl: ColStruct) => {
  return (
    <Text fz="sm">{item[structEl.cell.fields["value"]]}</Text>
  );
};

const cellPrice = (item: any, structEl: ColStruct) => {
  return (
    <NumberFormatter thousandSeparator="." decimalSeparator="," value={item[structEl.cell.fields["value"]]} suffix=" ₽"/>
  );
};

const cellOpen = (item: any, structEl: ColStruct) => {
  return (
    <Link href={`/crm/user/${item[structEl.cell.fields["value"]]}`}>
      <ActionIcon variant="subtle" color="gray">
        <IconPencil style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
      </ActionIcon>
    </Link>
  );
};

const cellBadge = (item: any, structEl: ColStruct) => {
  return (
    <Badge
      color={jobColors[item[structEl.cell.fields["value"]]]}
      variant="light"
    >
      {item[structEl.cell.fields["value"]]}
    </Badge>
  );
};

const CELLS: Record<string, (item: any, structEl: ColStruct) => JSX.Element> = {
  Avatar: cellAvatar,
  Text: cellText,
  Price: cellPrice,
  Badge: cellBadge,
  Rooms: cellNameInObjects,
  NameInObject: cellNameInObject,
  Open: cellOpen,
};

interface Props<T> {
  keyProperty: keyof T;
  struct: ColStruct[];
  items: T[];
  currentPage: number;
  total: number;
}

function BaseRow<T>(struct: ColStruct[], item: T, keyProperty: keyof T) {
  return struct.map((structEl, key) => (
    <Table.Td key={`${item[keyProperty]}-${key}`}>
      {CELLS[structEl.cell.name](item, structEl)}
    </Table.Td>
  ));
}

function BaseTable<T>({
  struct,
  items,
  keyProperty,
  total,
  currentPage,
}: Props<T>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlerPagination = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            {struct.map((el, key) => (
              <Table.Th key={key}>{el.header}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {items.map((item) => (
            <Table.Tr key={`${item[keyProperty]}`}>
              {BaseRow(struct, item, keyProperty)}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Pagination
        total={total}
        value={currentPage}
        onChange={handlerPagination}
        mt="sm"
      />
    </Table.ScrollContainer>
  );
}

export { BaseTable };
