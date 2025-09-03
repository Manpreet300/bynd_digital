// components/header/element.tsx
"use client";
import { styled } from "@mui/material/styles";
import { palettes } from "@/components/themes/palettes";

export const HeaderContainer = styled('header')(() => ({
  width: '100%',
  zIndex: 10,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: '2rem 0', // Vertical padding
  backgroundColor: "#fff",
  position: 'relative',

  "&::before": {
    content: '""',
    position: "absolute",
    top: '-2rem',
    left: '-4rem', // Breaks out of the parent's side padding
    right: '-4rem',// Breaks out of the parent's side padding
    height: "3px",
    backgroundColor: "#6e43c4",
  },
}));

// ... LanguageWrapper and LanguageItem are unchanged
export const LanguageWrapper = styled('div')(() => ({
  display: "flex",
  gap: "1.5rem",
}));


export const LanguageItem = styled('span', {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ active }) => ({
  cursor: "pointer",
  fontWeight: active ? "bold" : "normal",
  fontSize: "1rem",
  color: active ? palettes.textDark : palettes.gray,
  
  // Add the dot after each language
  "&::after": {
    content: '"."',
    marginLeft: "0.3rem",
    color: active ? palettes.bynd_red : palettes.gray, // ⬅️ red if active, gray otherwise
  },
  
  // Remove the trailing dot for the last item
  "&:last-child::after": {
    content: '""',
  },
}));