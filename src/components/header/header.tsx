// components/header/header.tsx
"use client";
import React, { useState } from "react";
import { HeaderContainer, LanguageWrapper, LanguageItem } from "./element";
import { Logo } from "@/components/logo/logo";
import { HeaderProps, LanguageCode, isLanguageCode } from "./interface";

export const Header: React.FC<HeaderProps> = ({
  initialLanguage = "EN",
  languages = ["EN", "SP", "IT"],
  onLanguageChange,
  logoSize = 140,
  logoVariant = "primary",
  showBorder = true,
  sx,
  className,
}) => {
  const [activeLanguage, setActiveLang] = useState<LanguageCode>(initialLanguage);

  const handleLanguageChange = (lang: string) => {
    if (isLanguageCode(lang)) {
      setActiveLang(lang);
      onLanguageChange?.(lang);
    }
  };

  return (
    <HeaderContainer showBorder={showBorder} sx={sx} className={className}>
      <Logo 
        size={logoSize} 
        variant={logoVariant}
      />
      <LanguageWrapper>
        {languages.map((lang) => (
          <LanguageItem
            key={lang}
            active={activeLanguage === lang}
            onClick={() => handleLanguageChange(lang)}
          >
            {lang}
          </LanguageItem>
        ))}
      </LanguageWrapper>
    </HeaderContainer>
  );
};