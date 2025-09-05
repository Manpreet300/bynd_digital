// components/logo/logo.tsx
"use client";
import React from "react";
import { LogoContainer, LogoText } from "./logo.element";

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      {/* Assuming the logo is text-based. Replace with an <img /> if it's an image. */}
      <LogoText className="LogoText">BYND DIGITAL</LogoText>
    </LogoContainer>
  );
};
