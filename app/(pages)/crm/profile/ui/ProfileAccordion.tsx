'use client'
import { Accordion } from "@mantine/core";

export default function ProfileAccordion() {
  return <Accordion defaultValue="1">
  <Accordion.Item value="Абонементы">
    <Accordion.Control>Абонементы</Accordion.Control>
    <Accordion.Panel>Абонементы</Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item  value="2">
    <Accordion.Control>Бронирования</Accordion.Control>
    <Accordion.Panel>Бронирования</Accordion.Panel>
  </Accordion.Item>

  <Accordion.Item value="3">
    <Accordion.Control>Завершенные визиты</Accordion.Control>
    <Accordion.Panel>Завершенные</Accordion.Panel>
  </Accordion.Item>
</Accordion>
}