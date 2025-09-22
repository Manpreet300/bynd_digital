// components/menu/menu.element.tsx
"use client";
import styled from "@emotion/styled";
import { MenuProps } from "./menu.interface";
import { palettes } from "../themes/palettes";

export const MenuWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 40px; 
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  z-index: 5;
  overflow: hidden;

  // Mobile responsive adjustments
  @media (max-width: 768px) {
    left: 20px;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    left: 16px;
    top: 40px;
    transform: none;
    gap: 0.3rem;
  }
`;

export const HamburgerButton = styled.div<Pick<MenuProps, 'size' | 'color'>>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ size }) => (size ? `${size}px` : "40px")}; 
  height: ${({ size }) => (size ? `${size * 0.7}px` : "28px")};
  background: transparent;
  border: none;
  padding: 0;

  // Mobile responsive sizing
  @media (max-width: 768px) {
    width: ${({ size }) => (size ? `${size * 0.8}px` : "32px")};
    height: ${({ size }) => (size ? `${size * 0.56}px` : "22px")};
  }

  @media (max-width: 480px) {
    width: ${({ size }) => (size ? `${size * 0.7}px` : "28px")};
    height: ${({ size }) => (size ? `${size * 0.49}px` : "19px")};
  }
`;

export const Line1 = styled.div<Pick<MenuProps, 'size' | 'color'>>`
  width: ${({ size }) => (size ? `${size * 0.5}px` : "20px")}; 
  height: 4px;
  background-color: ${({ color }) => color || palettes.iconColor};
  margin-left: auto;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ size }) => (size ? `${size * 0.4}px` : "16px")};
    height: 3px;
  }

  @media (max-width: 480px) {
    width: ${({ size }) => (size ? `${size * 0.35}px` : "14px")};
    height: 2px;
  }
`;

export const Line2 = styled.div<Pick<MenuProps, 'size' | 'color'>>`
  width: ${({ size }) => (size ? `${size * 0.75}px` : "30px")}; 
  height: 4px;
  background-color: ${({ color }) => color || palettes.iconColor};
  margin-left: auto;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ size }) => (size ? `${size * 0.6}px` : "24px")};
    height: 3px;
  }

  @media (max-width: 480px) {
    width: ${({ size }) => (size ? `${size * 0.525}px` : "21px")};
    height: 2px;
  }
`;

export const Line3 = styled.div<Pick<MenuProps, 'size' | 'color'>>`
  width: ${({ size }) => (size ? `${size}px` : "40px")}; 
  height: 4px;
  background-color: ${({ color }) => color || palettes.iconColor};
  margin-left: auto;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ size }) => (size ? `${size * 0.8}px` : "32px")};
    height: 3px;
  }

  @media (max-width: 480px) {
    width: ${({ size }) => (size ? `${size * 0.7}px` : "28px")};
    height: 2px;
  }
`;

export const MenuText = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${palettes.iconColor};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    letter-spacing: 0.15em;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    // Option 1: Keep vertical text but smaller
  writing-mode: vertical-rl;
    
  }
`;

// Alternative approach: Separate mobile and desktop text components
export const MenuTextMobile = styled.span`
  font-size: 0.7rem;
  font-weight: 500;
  color: ${palettes.iconColor};
  letter-spacing: 0.1em;
  writing-mode: horizontal-tb;
  text-orientation: mixed;
  
  @media (min-width: 481px) {
    display: none;
  }
`;

export const MenuTextDesktop = styled.span`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 0.2em;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${palettes.iconColor};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    letter-spacing: 0.15em;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;