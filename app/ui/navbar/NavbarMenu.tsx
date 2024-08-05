'use client'
import { ScrollArea, ThemeIcon, Collapse, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import classes from './NavbarMenu.module.css';
import { Navigation } from '@/app/lib/const';
import { FC, useRef } from 'react';
import { LinksGroup } from './NavbarLinksGroup'

interface LinksGroupProps {
  icon: string;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

const iconMapping: Record<string, FC<any>> = {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
};

const getIconComponent = (iconName: string) => {
  const IconComponent = iconMapping[iconName];
  return IconComponent ? <IconComponent style={{ width: rem(18), height: rem(18) }} /> : null;
};

const NavGroupItem = ({ item, toggle }: { item: LinksGroupProps, toggle: () => void }) => {
  return (
    <div onClick={toggle} className='flex gap-1 items-center text-sm text-base font-medium px-xs hover:bg-gray-0'>
      <ThemeIcon variant="light" size={30}>
        { getIconComponent(item.icon) }
      </ThemeIcon>
      <span>{item.label}</span>
    </div>
  );
}

const NavGroups = (item: LinksGroupProps) => {
  let opened = item.initiallyOpened || false;  const toggleOpened = () => opened = !opened;

  return (
    <>
      <div onClick={(toggleOpened)} className='flex gap-1 items-center text-sm text-base font-medium px-xs hover:bg-gray-0'>
        <ThemeIcon variant="light" size={30}>
          { getIconComponent(item.icon) }
        </ThemeIcon>
        <span>{item.label}</span>
      </div>
      { item.links ? <Collapse in={opened}></Collapse> : null}
    </>
  );
};

export function NavbarMenu() {
  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>
          { Navigation.map((item, key) => (<div key={key}>{LinksGroup(item)}</div>)) }
        </div>
      </ScrollArea>
    </nav>
  );
}