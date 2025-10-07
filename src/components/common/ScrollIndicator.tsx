"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { palettes } from "@/components/themes/palettes";
import { fraunces, montserrat } from "@/components/themes/primary/typography";
const ScrollWrapper = styled('div')({
  position: 'absolute',
  bottom: '1rem',
  right: '5%',
  transform: 'translateX(50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: palettes.bynd_red,
});

const ScrollText = styled('span')({
  writingMode: 'vertical-rl',
  transform: 'rotate(180deg)',
  textOrientation: 'mixed',
  letterSpacing: '0.2em',
  fontSize: '10px',
  fontWeight: 800,
  fontFamily: montserrat.style.fontFamily,
  color: palettes.bynd_red,
  marginBottom: '0.5rem', // adds space between text and arrow
});

export const ScrollIndicator = () => (
  <ScrollWrapper>
    <ScrollText>SCROLL</ScrollText>
    <ArrowDownwardIcon fontSize="small" sx={{ color: palettes.bynd_red }} />
  </ScrollWrapper>
);
