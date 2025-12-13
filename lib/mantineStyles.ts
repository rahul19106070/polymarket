// Utility types for Mantine pseudo-selectors
// This allows us to use CSS pseudo-selectors without TypeScript errors

export type MantineStyles = Record<string, any>;

export const createStyles = (styles: MantineStyles): MantineStyles => styles;





