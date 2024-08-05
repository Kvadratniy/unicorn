'use server'
import { Divider } from "@mantine/core";
import { Breadcrumbs, Anchor } from "@mantine/core";

interface Props {
  items: {
    title: string;
    href?: string;
  }[];
}

const BreadcrumbsComponent = ({ items }: Props) => {
  return (
    <div className="flex flex-col text-sm">
      <Breadcrumbs className="pb-2">
        {items.map((item, index) =>
          item.href ? (
            <Anchor size="sm" key={index} href={item.href}>
              {item.title}
            </Anchor>
          ) : (
            <span key={index} className="text-gray-500">{item.title}</span>
          )
        )}
      </Breadcrumbs>
      <Divider variant="dashed" className="pb-2" />
    </div>
  );
};

export default BreadcrumbsComponent;
