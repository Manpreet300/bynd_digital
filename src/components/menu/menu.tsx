"use client";
import React from "react";
import { MenuWrapper, HamburgerButton, Line1, Line2, Line3, MenuText } from "./menu.element";
import { MenuProps } from "./menu.interface";

export const Menu: React.FC<MenuProps> = ({ onClick, size, color }) => {
  return (
    <MenuWrapper onClick={onClick}>
      <HamburgerButton size={size} color={color}>
        <Line2 size={size} color={color} />
        <Line3 size={size} color={color} />
        <Line1 size={size} color={color} />
      </HamburgerButton>
      <MenuText>MENU</MenuText>
    </MenuWrapper>
  );
};