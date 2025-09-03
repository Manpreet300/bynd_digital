// components/social-icons/social-icon.element.tsx
"use client";
import { styled } from "@mui/material/styles";

export const SocialWrapper = styled('div')({
  position: 'absolute',
  top: '50%',
  right: '0', // Aligned to the very right of the white area
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  zIndex: 5,
});

// ... StyledIconButton is unchanged
export const StyledIconButton = styled('button')({
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    color: '#000',
    display: 'flex',
    '&:hover': {
        opacity: 0.7,
    }
});