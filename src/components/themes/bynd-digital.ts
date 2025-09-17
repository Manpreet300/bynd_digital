// theme/bynd_digital.ts
"use client";
import { createTheme } from "@mui/material/styles";
import { typography } from "./primary/typography";

// Extend MUI's Theme interface to support custom fields
declare module "@mui/material/styles" {
  interface Theme {
    themeName?: string;
  }
  interface ThemeOptions {
    themeName?: string;
  }
}

export const ByndDigitalTheme = createTheme({
  themeName: "bynd_digital", // ✅ now valid
  palette: {
    primary: {
      main: "#1a73e8",
    },
    secondary: {
      main: "#e91e63",
    },
  },
  typography,
  spacing: 8,
});
