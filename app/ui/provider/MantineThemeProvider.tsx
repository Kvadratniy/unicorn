import React from "react";
import Theme from '@/app/lib/theme';
import { MantineProvider } from '@mantine/core';

type MantineProps = {
  children: React.ReactNode;
};
function MantineThemeProvider({ children }: MantineProps) {
  return <MantineProvider theme={Theme}>{children}</MantineProvider>;
}

export default MantineThemeProvider;