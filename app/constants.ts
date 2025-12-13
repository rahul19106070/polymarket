// Color constants
export const COLORS = {
  primary: "#00FF00",
  primaryHover: "#00E600",
  background: "#000000",
  border: "#1A1A1A",
  text: "#CCCCCC",
  textMuted: "#999999",
  textDark: "#666666",
  surface: "#262626",
} as const;

// Common styles
export const STYLES = {
  card: {
    backgroundColor: COLORS.background,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 12,
    transition: "all 0.2s ease",
  },
  cardHover: {
    borderColor: COLORS.primary,
    backgroundColor: "rgba(0, 255, 0, 0.03)",
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    color: COLORS.background,
    fontWeight: 600,
  },
  primaryButtonHover: {
    backgroundColor: COLORS.primaryHover,
    boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)",
  },
  input: {
    backgroundColor: COLORS.background,
    border: `1px solid ${COLORS.border}`,
    color: COLORS.text,
  },
  inputFocus: {
    borderColor: COLORS.primary,
    boxShadow: "0 0 0 2px rgba(0, 255, 0, 0.1)",
  },
} as const;

// Badge variants
export const BADGE_STYLES = {
  primary: {
    backgroundColor: "rgba(0, 255, 0, 0.15)",
    color: COLORS.primary,
    border: "1px solid rgba(0, 255, 0, 0.3)",
  },
  secondary: {
    backgroundColor: "rgba(204, 204, 204, 0.1)",
    color: COLORS.text,
    border: "1px solid rgba(204, 204, 204, 0.2)",
  },
  probability: {
    backgroundColor: "rgba(0, 255, 0, 0.1)",
    color: COLORS.primary,
    border: "1px solid rgba(0, 255, 0, 0.2)",
  },
  category: {
    backgroundColor: COLORS.border,
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 600,
  },
} as const;





