"use client";
import { styled } from "@mui/material/styles";
import { fraunces, montserrat } from "@/components/themes/primary/typography";
import { palettes } from "@/components/themes/palettes";


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
});

export const ElevateContainer = styled('div')({
  maxWidth: '900px',
  textAlign: 'center',
  position: 'relative',
});

export const CallToActionWrapper = styled('div')({
  position: 'absolute',
  top: '160px',
  // bottom: '100px',
  left: '-100px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const FlourishImage = styled('img')({
  width: '60px',
  height: 'auto',
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
});

export const ArrowRight = styled('span')({
  display: 'inline-block',
  border: 'solid white',
  borderWidth: '0 2px 2px 0',
  fontFamily: fraunces.style.fontFamily,
  padding: '3px',
  transform: 'rotate(-45deg)',
  fontWeight: 600,
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
  }
});

export const UnderlineImage = styled('img')({
  position: 'absolute',
  width: '210px',
  height: 'auto',
  bottom: '-20px',
  left: '50%',
  transform: 'translateX(-50%)',
  pointerEvents: 'none',
  userSelect: 'none',
});

export const QuestionMarkImage = styled('img')({
  display: 'inline-block',
  width: '1em',        // match text size
  height: '1em',
  marginLeft: '0.2rem', // small spacing before ?
  verticalAlign: 'baseline', // aligns with text baseline
  userSelect: 'none',
  pointerEvents: 'none',
});