"use client";
import { styled } from '@mui/system';
import { GlobalStyles } from '@mui/material';
import { fraunces, montserrat } from "@/components/themes/primary/typography";

export const globalStyles = {
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 0.05 },
  },
  ':root': {
    '--color-text-dark': '#1d1d1f',
    '--color-text-medium': '#555555',
    '--color-text-id': '#666666',
    '--color-divider-red': '#d94e56',
    '--font-family-sans': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  body: {
    fontFamily: 'var(--font-family-sans)',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    margin: 0,
  },
};

export const PageWrapper = styled('div')({
  position: 'relative',
  backgroundColor: '#fdfdfd',
});

export const BackgroundImageLayer = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  zIndex: -1,
  opacity: 0,
  animation: 'fadeIn 2s ease-out forwards',
  
  '@media (max-width: 768px)': {
    position: 'absolute',
    backgroundAttachment: 'scroll',
    minHeight: '200vh',
  },
});

export const PageContainer = styled('main')({
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '4rem 0',
  minHeight: '120vh',
  position: 'relative',

  '@media (max-width: 768px)': {
    padding: '2rem 0',
    minHeight: '150vh',
  },
});

export const HeroSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.5rem',
  padding: '0 4rem',
  marginBottom: '4rem',

  '@media (max-width: 768px)': {
    gap: '2rem',
    marginBottom: '3rem',
    padding: '0 1rem',
  },

  '@media (max-width: 480px)': {
    padding: '0 0.5rem',
  },
});

export const HeroHeading = styled('h1')({
  fontSize: 'clamp(32px, 5vw, 52px)',
  fontWeight: 800,
  color: 'var(--color-text-dark)',
  lineHeight: 1.1,
  letterSpacing: '-0.03em',
  fontFamily: montserrat.style.fontFamily,
  maxWidth: '100%',
});

export const HeroTextWrapper = styled('div')({
  marginLeft: 'auto',
  maxWidth: '60%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  '@media (max-width: 992px)': {
    maxWidth: '70%',
  },

  '@media (max-width: 768px)': {
    marginLeft: 0,
    maxWidth: '100%',
  },
});

export const HeroText = styled('p')({
  fontSize: 'clamp(16px, 1.5vw, 18px)',
  fontFamily: fraunces.style.fontFamily,
  lineHeight: 1.4,
  color: 'black',
  fontWeight: 300,
  marginBottom: '2rem',
});

export const ServicesTabContainer = styled('div')({
  position: 'relative',
  width: '100vw',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  backgroundImage: 'url("/strategies-bg.png")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundAttachment: 'local',
  padding: '4rem 0',
  minHeight: '500px',
  
  '@media (max-width: 992px)': {
    padding: '3rem 0',
  },

  '@media (max-width: 768px)': {
    padding: '2rem 0',
    minHeight: '60vh',
    backgroundAttachment: 'scroll',
  },

  '@media (max-width: 480px)': {
    padding: '1.5rem 0',
  },
});

export const ServicesTabInner = styled('div')({
  maxWidth: '1440px',
  margin: '0 auto',
  padding: '0 4rem',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
  minHeight: '500px',

  '@media (max-width: 992px)': {
    padding: '0 2rem',
    gap: '1.5rem',
  },

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    padding: '0 1rem',
    minHeight: 'auto',
    gap: '2rem',
  },

  '@media (max-width: 480px)': {
    padding: '0 0.5rem',
  },
});

export const ServicesTabNumbers = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  width: '40%',
  minWidth: '250px',

  '@media (max-width: 992px)': {
    width: '45%',
    gap: '3rem',
  },

  '@media (max-width: 768px)': {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'space-between',
  },
});

export const TabNumberRow = styled('div')<{ $isActive: boolean }>(({ $isActive }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  color: $isActive ? 'var(--color-divider-red)' : 'var(--color-text-id)',
  fontFamily: montserrat.style.fontFamily,
  fontWeight: 600,
  padding: '0.5rem 0',
  position: 'relative',
  transform: $isActive ? 'translateX(5px)' : 'translateX(0)',

  '&:hover': {
    color: 'var(--color-divider-red)',
    transform: 'translateX(5px)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    left: '-1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '3px',
    height: $isActive ? '100%' : '0',
    backgroundColor: 'var(--color-divider-red)',
    transition: 'height 0.3s ease',
  },

  '@media (max-width: 992px)': {
    gap: '0.8rem',
  },

  '@media (max-width: 768px)': {
    flex: '1 1 calc(50% - 0.5rem)',
    minWidth: '140px',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '1rem 0.5rem',
    borderRadius: '8px',
    background: $isActive ? 'rgba(217, 78, 86, 0.1)' : 'rgba(255, 255, 255, 0.1)',

    '&::after': {
      display: 'none',
    },
  },

  '@media (max-width: 480px)': {
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '0.8rem 0.3rem',
    minWidth: '120px',
  },
}));

export const TabNumber = styled('span')({
  fontWeight: 800,
  fontSize: 'clamp(14px, 1.2vw, 16px)',
  minWidth: '2rem',
});

export const TabTitle = styled('span')({
  fontWeight: 800,
  fontFamily: fraunces.style.fontFamily,
  color: 'black',
  fontSize: 'clamp(14px, 1.5vw, 18px)',
  lineHeight: 1.2,

  '@media (max-width: 480px)': {
    fontSize: '12px',
    textAlign: 'center',
    lineHeight: 1.1,
  },
});

export const ServicesTabContent = styled('div')({
  flex: 1,
  position: 'relative',
  minHeight: '400px',

  '@media (max-width: 768px)': {
    position: 'static',
    minHeight: 'auto',
  },
});

export const TabContent = styled('div')<{ $isActive: boolean }>(({ $isActive }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  opacity: $isActive ? 1 : 0,
  pointerEvents: $isActive ? 'auto' : 'none',
  transition: 'opacity 0.3s ease',

  '@media (max-width: 768px)': {
    position: 'static',
    opacity: 1,
    pointerEvents: 'auto',
    display: $isActive ? 'block' : 'none',
  },
}));

export const ServiceItemDivider = styled('hr')({
  border: 'none',
  height: '1px',
  backgroundColor: 'var(--color-divider-red)',
  margin: '0 0 1.25rem 0',
});

export const ServiceItemDescriptionList = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const ServiceItemDescription = styled('span')({
  fontSize: 'clamp(14px, 1.4vw, 18px)',
  lineHeight: 1.3,
  color: 'black',
  fontWeight: 400,
  fontFamily: fraunces.style.fontFamily,
  letterSpacing: '-0.01em',
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