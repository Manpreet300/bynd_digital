// components/menu/menu.tsx
"use client";
import React from "react";
import { MenuProps } from "./menu.interface";
import { MenuWrapper, HamburgerButton, MenuText } from "./menu.element";
import { palettes } from "@/components/themes/palettes";

export const Menu: React.FC<MenuProps> = ({ size = 25, onClick }) => {
  return (
    <MenuWrapper onClick={onClick}>
      <HamburgerButton size={size} color={palettes.textDark}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerButton>
      <MenuText>MENU</MenuText>
    </MenuWrapper>
  );
};