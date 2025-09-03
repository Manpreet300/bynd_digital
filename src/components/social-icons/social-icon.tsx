// components/social-icons/social-icon.tsx
"use client";
import React from "react";
import { SocialWrapper, StyledIconButton } from "./social-icon.element";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SocialIcon = () => (
  <SocialWrapper>
    <StyledIconButton><FacebookIcon fontSize="small" /></StyledIconButton>
    <StyledIconButton><InstagramIcon fontSize="small" /></StyledIconButton>
  </SocialWrapper>
);