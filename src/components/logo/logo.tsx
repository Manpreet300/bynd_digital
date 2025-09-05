// components/logo/logo.tsx
"use client";
import React from "react";
import { LogoContainer, LogoText } from "./logo.element";
import { LogoProps } from "../logo/logo.interface";

export const Logo: React.FC<LogoProps> = ({ size, variant }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <LogoContainer>
      {/* Assuming the logo is text-based. Replace with an <img /> if it's an image. */}
      <LogoText className="LogoText">BYND DIGITAL</LogoText>
    </LogoContainer>
  );
};
