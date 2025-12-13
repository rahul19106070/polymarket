import { createTheme, MantineColorsTuple, MantineTheme } from "@mantine/core";

// OKX-inspired color palette
const green: MantineColorsTuple = [
  "#e6ffe6",
  "#ccffcc",
  "#99ff99",
  "#66ff66",
  "#33ff33",
  "#00FF00", // Primary neon green
  "#00e600",
  "#00cc00",
  "#00b300",
  "#009900",
];

const dark: MantineColorsTuple = [
  "#CCCCCC", // text primary
  "#999999", // text muted
  "#666666", // text subtle
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

  // Global component defaults (simple values only for Client Components)
  components: {
    Button: {
      defaultProps: {
        fw: 600,
      },
    },
    Paper: {
      defaultProps: {
        radius: "md",
      },
    },
  },

  // Other theme settings
  other: {
    // Custom color tokens
    colors: {
      primary: "#00FF00",
      primaryHover: "#00E600",
      background: "#000000",
      backgroundHover: "#1A1A1A",
      text: "#CCCCCC",
      textMuted: "#999999",
      textSubtle: "#666666",
      border: "#1A1A1A",
      borderHover: "#00FF00",
      progressBg: "#262626",
      progressSecondary: "#666666",
      glowShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
    },
  },
});
