"use client";
import { styled } from '@mui/system';
import { montserrat } from "@/components/themes/primary/typography";

export const HighlightsContainer = styled('div')<{
  containerBackground?: string;
}>(({ containerBackground }) => ({
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '4rem 0',
  position: 'relative',
  textAlign: 'center',
  background: containerBackground || 'transparent',

  '@media (max-width: 768px)': {
    padding: '2rem 0',
  },
}));

export const HeroHeading = styled('h1')<{
  textColor?: string;
}>(({ textColor }) => ({
  fontSize: 'clamp(32px, 5vw, 52px)',
  fontWeight: 800,
  color: textColor || 'var(--color-text-dark, #1d1f)',
  lineHeight: 1.1,
  letterSpacing: '-0.03em',
  fontFamily: montserrat.style.fontFamily,
  maxWidth: '100%',
}));

export const HighlightStrategy = styled('span')({
  position: 'relative',
  display: 'inline-block',
  padding: '0 4px',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '-15px',
    width: '120%',
    height: '140%',
    background: 'url("/circle.png") no-repeat center',
    backgroundSize: 'contain',
    pointerEvents: 'none',

    '@media (max-width: 768px)': {
      top: '-5px',
      left: '-8px',
      height: '120%',
    },
  },
});

export const HighlightResult = styled('span')({
  position: 'relative',
  display: 'inline-block',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: '-40px',
    width: '100%',
    height: '80px',
    background: 'url("/line.png") no-repeat center',
    backgroundSize: 'contain',
    pointerEvents: 'none',

    '@media (max-width: 768px)': {
      bottom: '-20px',
      height: '40px',
    },
  },
});