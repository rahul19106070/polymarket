import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

import { theme } from "./theme";
import "./globals.css";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Prediction Markets | X Layer",
  description: "Decentralized prediction markets on X Layer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
