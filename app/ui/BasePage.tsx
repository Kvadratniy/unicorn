"use server";
import { Tabs, Text, ThemeIcon, Timeline } from "@mantine/core";
import { IconCalendarTime } from "@tabler/icons-react";

export default async function BasePage({
  children,
  action,
  title,
}: {
  children: React.ReactNode;
  action?: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="flex flex-grow flex-col gap-2 overflow-hidden">
      {title && (
        <div className="flex justify-between items-center px-sm py-sm  border-1 border-b border-gray-200">
          <div className="flex gap-2">
            <ThemeIcon>
              <IconCalendarTime style={{ width: "70%", height: "70%" }} />
            </ThemeIcon>
            <Text c="dark" size="lg" fw={600}>
              {title}
            </Text>
          </div>
          {action}
        </div>
      )}
      <div className="flex flex-1 flex-col px-sm overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
