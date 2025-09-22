// components/hero/elements.tsx
"use client";
import { styled } from "@mui/material/styles";
import { fraunces, montserrat } from "@/components/themes/primary/typography";
import { palettes } from "@/components/themes/palettes";
import { ImageProps } from "./interface";

export const ElevateSection = styled('section')({
  
  backgroundColor: palettes.gray,
  padding: '6rem 2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '100vh',
  boxSizing: 'border-box',
  overflow: 'hidden',
  // Responsive padding
  '@media (max-width: 768px)': {
    padding: '4rem 1.5rem',
  },
  '@media (max-width: 480px)': {
    padding: '2rem 1rem',
  },
});

export const ElevateContainer = styled('div')({
  maxWidth: '900px',
  textAlign: 'center',
  position: 'relative',
  width: '100%',
  // Responsive max-width
  '@media (max-width: 768px)': {
    maxWidth: '100%',
  },
});

export const CallToActionWrapper = styled('div')({
  position: 'absolute',
  top: '160px',
  left: '-100px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  // Responsive positioning
  '@media (max-width: 1024px)': {
    top: '100px',
    left: '-50px',
  },
  '@media (max-width: 768px)': {
    position: 'static',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
});

export const FlourishImage = styled('img')<ImageProps>({
  width: '60px',
  height: 'auto',
  // Responsive image size
  '@media (max-width: 768px)': {
    width: '40px',
  },
  '@media (max-width: 480px)': {
    width: '30px',
  },
});

export const LetsTalkButton = styled('button')({
  backgroundColor: palettes.bynd_red,
  color: palettes.white,
  fontFamily: fraunces.style.fontFamily,
  border: 'none',
  borderRadius: '50px',
  padding: '0.8rem 1.5rem',
  fontWeight: 600,
  fontSize: '0.8rem',
  letterSpacing: '1px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  userSelect: 'none',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#ff6d63',
  },
  // Responsive padding and font size
  '@media (max-width: 480px)': {
    padding: '0.6rem 1.2rem',
    fontSize: '0.7rem',
  },
});

export const ArrowRight = styled('span')({
  display: 'inline-block',
  border: 'solid white',
  borderWidth: '0 2px 2px 0',
  fontFamily: fraunces.style.fontFamily,
  padding: '3px',
  transform: 'rotate(-45deg)',
  fontWeight: 600,
  // Responsive arrow size
  '@media (max-width: 480px)': {
    padding: '2px',
  },
});

export const ElevateText = styled('h2')({
  fontSize: '6rem',
  fontFamily: fraunces.style.fontFamily,
  fontWeight: 600,
  color: palettes.textDark,
  lineHeight: 1.3,
  userSelect: 'none',
  textAlign: 'center',
  'span.digital-presence': {
    fontStyle: 'italic',
  },
  // Responsive font size
  '@media (max-width: 1024px)': {
    fontSize: '4.5rem',
  },
  '@media (max-width: 768px)': {
    fontSize: '3rem',
  },
  '@media (max-width: 480px)': {
    fontSize: '2rem',
    lineHeight: 1.4,
  },
});

export const UnderlineImage = styled('img')<ImageProps>({
  position: 'absolute',
  width: '210px',
  height: 'auto',
  bottom: '-20px',
  left: '50%',
  transform: 'translateX(-50%)',
  pointerEvents: 'none',
  userSelect: 'none',
  // Responsive image size
  '@media (max-width: 768px)': {
    width: '150px',
    bottom: '-15px',
  },
  '@media (max-width: 480px)': {
    width: '100px',
    bottom: '-10px',
  },
});

export const QuestionMarkImage = styled('img')<ImageProps>({
  display: 'inline-block',
  width: '1em',
  height: '1em',
  marginLeft: '0.2rem',
  verticalAlign: 'baseline',
  userSelect: 'none',
  pointerEvents: 'none',
  // Responsive image size
  '@media (max-width: 480px)': {
    marginLeft: '0.1rem',
  },
});