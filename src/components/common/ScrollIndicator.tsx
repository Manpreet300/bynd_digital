// components/common/ScrollIndicator.tsx
"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { palettes } from "@/components/themes/palettes";

const ScrollWrapper = styled('div')({
    position: 'absolute',
    // ✅ This creates the 4rem space from the bottom edge of the gray panel
    bottom: '0',
    right: '5%',
    transform: 'translateX(50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    color: palettes.bynd_red,
});
// ... ScrollText is unchanged
const ScrollText = styled('span')({
    writingMode: 'vertical-rl',
    textOrientation: 'mixed',
    letterSpacing: '0.2em',
    fontSize: '10px',
});

export const ScrollIndicator = () => (
    <ScrollWrapper>
        <ArrowDownwardIcon fontSize="small" />
        <ScrollText>SCROLL</ScrollText>
    </ScrollWrapper>
);