import { createTheme, MantineColorsTuple } from "@mantine/core";

const green: MantineColorsTuple = [
  "#e6ffe6",
  "#ccffcc",
  "#99ff99",
  "#66ff66",
  "#33ff33",
  "#00FF00", // Primary OKX green
  "#00e600",
  "#00cc00",
  "#00b300",
  "#009900",
];

const dark: MantineColorsTuple = [
  "#CCCCCC", // text
  "#999999", // muted
  "#666666",
  "#333333",
  "#262626",
  "#1A1A1A", // border/hover
  "#0d0d0d",
  "#000000", // background
  "#000000",
  "#000000",
];

export const theme = createTheme({
  primaryColor: "green",
  colors: {
    green,
    dark,
  },
  black: "#000000",
  white: "#CCCCCC",
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  defaultRadius: "md",
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
});


