import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import HeaderComponent from "../ui/Header";
import FooterComponent from "../ui/Footer";
import NextAuthSessionProvider from "../ui/provider/NextAuthSessionProvider";
import MantineThemeProvider from "../ui/provider/MantineThemeProvider";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import 'react-spring-bottom-sheet/dist/style.css'

export const metadata: Metadata = {
  title: "Unicorn studios",
  description: "Творческий дом",
  generator: "Unicorn",
  manifest: "/manifest.json",
  keywords: ["Unicorn"],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, user-scalable=no",
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <NextAuthSessionProvider>
          <MantineThemeProvider>

            <div className="max-w-[800px] mx-auto w-full flex flex-col self-center h-screen">
              {/* <HeaderComponent /> */}
              {children}
              <FooterComponent />
              {/* {modal} */}
            </div>
          </MantineThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
