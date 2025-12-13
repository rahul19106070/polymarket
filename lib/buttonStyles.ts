import { MantineTheme } from "@mantine/core";

// Button variant styles
export const getButtonVariantStyles = (
  variant: "primary" | "secondary",
  theme: MantineTheme
) => {
  if (variant === "primary") {
    return {
      root: {
        backgroundColor: theme.colors.green[5],
        color: theme.black,
        border: "none",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: `${theme.colors.green[6]} !important`,
          boxShadow: "0 0 20px rgba(0, 255, 0, 0.3) !important",
        },
      },
    };
  }

  if (variant === "secondary") {
    return {
      root: {
        backgroundColor: "transparent",
        color: theme.colors.dark[0],
        border: `1px solid ${theme.colors.dark[5]}`,
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: `${theme.colors.green[5]} !important`,
          color: `${theme.colors.green[5]} !important`,
          backgroundColor: "rgba(0, 255, 0, 0.05) !important",
        },
      },
    };
  }

  return {};
};

// Badge variant styles
export const getBadgeVariantStyles = (
  variant: "primary" | "secondary" | "category" | "probability",
  theme: MantineTheme
) => {
  switch (variant) {
    case "primary":
      return {
        root: {
          backgroundColor: "rgba(0, 255, 0, 0.15)",
          color: theme.colors.green[5],
          border: "1px solid rgba(0, 255, 0, 0.3)",
        },
      };
    case "secondary":
      return {
        root: {
          backgroundColor: "rgba(204, 204, 204, 0.1)",
          color: theme.colors.dark[0],
          border: "1px solid rgba(204, 204, 204, 0.2)",
        },
      };
    case "category":
      return {
        root: {
          backgroundColor: theme.colors.dark[5],
          color: theme.colors.green[5],
          fontSize: 12,
          fontWeight: 600,
        },
      };
    case "probability":
      return {
        root: {
          backgroundColor: "rgba(0, 255, 0, 0.1)",
          color: theme.colors.green[5],
          border: "1px solid rgba(0, 255, 0, 0.2)",
          fontSize: 12,
          fontWeight: 700,
        },
      };
    default:
      return {};
  }
};

// Paper styles
export const getPaperStyles = (theme: MantineTheme) => ({
  root: {
    backgroundColor: theme.black,
    border: `1px solid ${theme.colors.dark[5]}`,
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: theme.colors.green[5],
      backgroundColor: "rgba(0, 255, 0, 0.03)",
    },
  },
});

// TextInput styles
export const getTextInputStyles = (theme: MantineTheme) => ({
  input: {
    backgroundColor: theme.black,
    border: `1px solid ${theme.colors.dark[5]}`,
    color: theme.colors.dark[0],
    transition: "all 0.2s ease",
    "&:focus": {
      borderColor: `${theme.colors.green[5]} !important`,
      boxShadow: "0 0 0 2px rgba(0, 255, 0, 0.1) !important",
    },
    "&::placeholder": {
      color: theme.colors.dark[2],
    },
  },
});

// Menu styles
export const getMenuStyles = (theme: MantineTheme) => ({
  dropdown: {
    backgroundColor: theme.black,
    border: `1px solid ${theme.colors.dark[5]}`,
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
  },
  item: {
    color: theme.colors.dark[0],
    "&:hover": {
      backgroundColor: `${theme.colors.dark[5]} !important`,
    },
  },
});

// SegmentedControl styles
export const getSegmentedControlStyles = (theme: MantineTheme) => ({
  root: {
    backgroundColor: theme.black,
    border: `1px solid ${theme.colors.dark[5]}`,
    padding: 4,
  },
  indicator: {
    backgroundColor: theme.colors.dark[5],
  },
  label: {
    color: theme.colors.dark[1],
    "&[data-active]": {
      color: `${theme.colors.green[5]} !important`,
    },
  },
});

