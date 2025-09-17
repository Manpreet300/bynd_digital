// theme/typography.ts
"use client";
import { ThemeOptions } from "@mui/material/styles";
import { Fraunces, Montserrat } from "next/font/google";

// Fonts
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Build a MUI-compatible typography object
export const typography: ThemeOptions["typography"] = {
  fontFamily: `${montserrat.style.fontFamily}, ${fraunces.style.fontFamily}, sans-serif`,
  h1: {
    fontFamily: montserrat.style.fontFamily,
    fontWeight: 800,
    fontSize: "200px",
  },
  h2: {
    fontFamily: montserrat.style.fontFamily,
    fontWeight: 600,
    fontSize: "2rem",
  },
  body1: {
    fontFamily: montserrat.style.fontFamily,
    fontSize: "1rem",
  },
  button: {
    fontFamily: montserrat.style.fontFamily,
    textTransform: "none",
  },
};