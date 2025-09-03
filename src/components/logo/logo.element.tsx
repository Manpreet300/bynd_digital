// components/logo/logo.element.tsx
"use client";
import { styled } from "@mui/material/styles";

export const LogoContainer = styled('div')({
  cursor: 'pointer',
});

export const LogoText = styled('span')({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: '#000',
  letterSpacing: '0.1em',
});