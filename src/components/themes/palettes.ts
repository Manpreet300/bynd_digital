export const palettes = {
  gray: "var(--gray-bg)",
  light: "var(--background)",
  white: "var(--white-bg)",
  bynd_red: "var(--accent-color)",
  textDark: "var(--text-color)",
  textSecondary: "var(--secondary-text)",
  iconColor: "var(--icon-color)",
  borderColor: "var(--border-color)",
} as const;
 
export type Palette = typeof palettes;