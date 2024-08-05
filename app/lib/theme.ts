
import { type MantineColorsTuple, createTheme } from '@mantine/core';

const unicorn: MantineColorsTuple = [
    '#ffeaff',
    '#f9d5fc',
    '#eca7f4',
    '#e278ec',
    '#d750e5',
    '#d136e1',
    '#cf27e0',
    '#b71ac6',
    '#a411b2',
    '#8f049d'
  ];


  const Theme = createTheme({
    colors: {
      unicorn,
    },
    primaryColor: 'unicorn',
  });

  export default Theme;
