// components/menu/menu.element.tsx
"use client";
import styled from "@emotion/styled";
import { MenuProps } from "./menu.interface";

export const MenuWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0 ; // Aligned to the very left of the gray area
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  z-index: 5;
  overflow: hidden;
`;

// ... HamburgerButton and MenuText are unchanged
export const HamburgerButton = styled.div<Pick<MenuProps, 'size' | 'color'>>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ size }) => (size ? `${size}px` : "25px")};
  height: ${({ size }) => (size ? `${size * 0.7}px` : "18px")};
  background: transparent;
  border: none;
  padding: 0;

  div {
    width: 100%;
    height: 3px;
    background-color: ${({ color }) => color || "#000"};
    border-radius: 2px;
  }
`;
export const MenuText = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  font-weight: 500;
  color: #000;
`;