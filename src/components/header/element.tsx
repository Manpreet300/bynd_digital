// components/header/element.tsx
"use client";
import { styled } from "@mui/material/styles";
import { palettes } from "@/components/themes/palettes";
import { HeaderContainerProps, LanguageWrapperProps, LanguageItemProps } from "./interface";

export const HeaderContainer = styled('header')<HeaderContainerProps>(({ theme, showBorder = true }) => ({
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  zIndex: 10,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: palettes.light,
  position: 'relative',
  
  padding: '2rem 4rem',

  [theme.breakpoints.down('md')]: {
    padding: '1.5rem 2rem',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '1rem 1.5rem',
    flexDirection: 'column',
    gap: '1rem',
  },

  [theme.breakpoints.down(480)]: {
    padding: '0.75rem 1rem',
    gap: '0.75rem',
  },

  ...(showBorder && {
    "&::before": {
      content: '""',
      position: "absolute",
      top: '-2rem',
      height: "3px",
      backgroundColor: palettes.borderColor,
      
      left: '-4rem',
      right: '-4rem',

      [theme.breakpoints.down('md')]: {
        left: '-2rem',
        right: '-2rem',
        top: '-1.5rem',
      },

      [theme.breakpoints.down('sm')]: {
        left: '-1.5rem',
        right: '-1.5rem',
        top: '-1rem',
      },

      [theme.breakpoints.down(480)]: {
        left: '-1rem',
        right: '-1rem',
        top: '-0.75rem',
      },
    },
  }),
}));

export const LanguageWrapper = styled('div')<LanguageWrapperProps>(({ theme }) => ({
  display: "flex",
  gap: "1.5rem",

  [theme.breakpoints.down('md')]: {
    gap: "1.2rem",
  },

  [theme.breakpoints.down('sm')]: {
    gap: "1rem",
    justifyContent: "center",
  },

  [theme.breakpoints.down(480)]: {
    gap: "0.8rem",
  },
}));

export const LanguageItem = styled('span', {
  shouldForwardProp: (prop) => prop !== "active",
})<LanguageItemProps>(({ active, theme }) => ({
  cursor: "pointer",
  fontWeight: active ? "bold" : "normal",
  fontSize: "1rem",
  color: active ? palettes.textDark : palettes.gray,
  transition: "all 0.2s ease",
  
  [theme.breakpoints.down('md')]: {
    fontSize: "0.95rem",
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: "0.9rem",
  },

  [theme.breakpoints.down(480)]: {
    fontSize: "0.85rem",
  },

  "@media (hover: hover)": {
    "&:hover": {
      color: active ? palettes.textDark : palettes.bynd_red,
      transform: "translateY(-1px)",
    },
  },
  
  "&::after": {
    content: '"."',
    marginLeft: "0.3rem",
    color: active ? palettes.bynd_red : palettes.gray,
    
    [theme.breakpoints.down('sm')]: {
      marginLeft: "0.2rem",
    },
  },
  
  "&:last-child::after": {
    content: '""',
  },
}));