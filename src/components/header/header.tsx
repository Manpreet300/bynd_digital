// components/header/header.tsx
"use client";
import React, { useState } from "react";
import { HeaderContainer, LanguageWrapper, LanguageItem } from "./element";
import { Logo } from "@/components/logo/logo";

export const Header: React.FC = () => {
  const [activeLanguage, setActiveLang] = useState("EN");
  const languages = ["EN", "SP", "IT"];

  return (
    <HeaderContainer>
      <Logo size={140} variant="primary" />
      <LanguageWrapper>
        {languages.map((lang) => (
          <LanguageItem
            key={lang}
            active={activeLanguage === lang}
            onClick={() => setActiveLang(lang)}
          >
            {lang}
          </LanguageItem>
        ))}
      </LanguageWrapper>
    </HeaderContainer>
  );
};