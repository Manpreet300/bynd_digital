// components/header/interface.ts
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/material";

export type LanguageCode = "EN" | "SP" | "IT";

export interface ResponsiveSize {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export interface LanguageItemProps {
  active?: boolean;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  className?: string;
}

export interface LanguageWrapperProps {
  sx?: SxProps<Theme>;
  className?: string;
  children: React.ReactNode;
}

export interface HeaderContainerProps {
  sx?: SxProps<Theme>;
  className?: string;
  children: React.ReactNode;
  showBorder?: boolean;
}

export interface LogoProps {
  size: number;
  variant: "primary" | "secondary" | "white" | "dark";
  sx?: SxProps<Theme>;
  className?: string;
}

export interface HeaderProps {
  initialLanguage?: LanguageCode;
  languages?: LanguageCode[];
  onLanguageChange?: (language: LanguageCode) => void;
  logoSize?: number;
  logoVariant?: "primary" | "secondary" | "white" | "dark";
  showBorder?: boolean;
  sx?: SxProps<Theme>;
  className?: string;
}

export interface HeaderBreakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface ResponsivePadding {
  desktop: string;
  tablet: string;
  mobile: string;
  extraSmall: string;
}

export interface HeaderStyles {
  padding: ResponsivePadding;
  borderHeight: string;
  zIndex: number;
  backgroundColor: string;
}

export interface LanguageStyles {
  fontSize: ResponsiveSize;
  gap: ResponsiveSize;
  dotMargin: ResponsiveSize;
  transition: string;
}

export interface HeaderConfig {
  styles: HeaderStyles;
  languageStyles: LanguageStyles;
  breakpoints: HeaderBreakpoints;
  defaultLanguage: LanguageCode;
  availableLanguages: LanguageCode[];
}

export const isLanguageCode = (code: string): code is LanguageCode => {
  return ["EN", "SP", "IT"].includes(code);
};

export const isResponsiveSize = (size: number | ResponsiveSize): size is ResponsiveSize => {
  return typeof size === 'object' && size !== null;
};