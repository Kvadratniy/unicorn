"use client";
import { Tabs, Text, Timeline } from "@mantine/core";

export default function TimeLine() {
  return (
    <>
      <Tabs color="teal" defaultValue="first">
        <Tabs.List>
          <Tabs.Tab value="first">Сегодня</Tabs.Tab>
          <Tabs.Tab value="second" color="blue">
            23.02
          </Tabs.Tab>
          <Tabs.Tab value="second" color="blue">
            24.02
          </Tabs.Tab>
          <Tabs.Tab value="second" color="blue">
            24.02
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="first" pt="lg">
          <Timeline bulletSize={24}>
            <Timeline.Item title="12:00 - 13:00">
              <Text c="dark" size="sm">
                Уроки вокала
              </Text>
              <Text c="grape" size="sm">
                Ученик: Петр Петров
              </Text>
              <Text c="dark" size="sm">
                Вокальный кабинет
              </Text>
            </Timeline.Item>
            <Timeline.Item title="13:00 - 14:00">
              <Text c="dark" size="sm">
                Уроки вокала
              </Text>
              <Text c="grape" size="sm">
                Ученик: Петр Петров
              </Text>
              <Text c="dark" size="sm">
                Вокальный кабинет
              </Text>
            </Timeline.Item>
            <Timeline.Item title="17:00 - 18:00">
              <Text c="dark" size="sm">
                Уроки вокала
              </Text>
              <Text c="grape" size="sm">
                Ученик: Петр Петров
              </Text>
              <Text c="dark" size="sm">
                Вокальный кабинет
              </Text>
            </Timeline.Item>
          </Timeline>
        </Tabs.Panel>

        <Tabs.Panel value="second" pt="xs">
          Second tab color is blue, it gets this value from props, props have
          the priority and will override context value
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
