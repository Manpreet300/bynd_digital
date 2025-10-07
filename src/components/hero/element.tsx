// components/hero/element.tsx
"use client";
import { styled } from "@mui/material/styles";
import { palettes } from "@/components/themes/palettes";
import { fraunces } from "@/components/themes/primary/typography";
import { montserrat } from "@/components/themes/primary/typography";
import { SectionProps } from "./interface";


export const RootContainer = styled('div')({
  flex: 1,
  position: 'relative',
  width: '100%',
  backgroundColor: palettes.light,
  margin: '0 auto',
  height: '100vh',

});

export const HeroContainer = styled('div')({
  flex: 1,
  position: 'relative',
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
  height: '100vh',
  padding: '0rem 4rem 4rem',
  boxSizing: 'border-box',
  // Responsive padding
  '@media (max-width: 768px)': {
    padding: '0rem 2rem 2rem',
  },
  '@media (max-width: 480px)': {
    padding: '0rem 1rem 1rem',
  },
});

export const SplitView = styled('div')({
  display: 'flex',
  flexDirection: 'row', // Explicitly set to row for clarity
  width: '100%',
  height: '100%',
  // No media query to change to column, keeping horizontal layout
});

export const LeftSection = ({ children }: SectionProps) => (
  <div
    style={{
      flex: 1,
      backgroundColor: palettes.gray,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

export const RightSection = ({ children }: SectionProps) => (
  <div
    style={{
      flex: 1,
      backgroundColor: palettes.white,
      position: 'relative',
    } as React.CSSProperties}
  >
    {children}
  </div>
);

export const CentralText = styled('p')({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  color: palettes.textDark,
  fontFamily: montserrat.style.fontFamily,
  fontSize: "200px",
  fontWeight: 800,
  lineHeight: 0.9,
  letterSpacing: "-0.05em",
  userSelect: 'none',
  // Responsive font size
  '@media (max-width: 1024px)': {
    fontSize: '120px',
  },
  '@media (max-width: 768px)': {
    fontSize: '100px',
  },
  '@media (max-width: 480px)': {
    fontSize: '70px',
    lineHeight: 1.0,
    letterSpacing: '-0.03em',
  },
});

export const RedDot = styled("span")({
  display: 'inline-block',
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: palettes.bynd_red,
  borderRadius: '50%',
  marginLeft: '1rem',
  verticalAlign: 'middle',
  // Responsive size
  '@media (max-width: 768px)': {
    width: '1.5rem',
    height: '1.5rem',
    marginLeft: '0.5rem',
  },
  '@media (max-width: 480px)': {
    width: '1rem',
    height: '1rem',
    marginLeft: '0.3rem',
  },
});