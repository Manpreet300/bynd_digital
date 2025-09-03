// components/hero/element.tsx
"use client";
import { styled } from "@mui/material/styles";
import { palettes } from "@/components/themes/palettes";

export const HeroContainer = styled('div')({
  flex: 1,
  position: 'absolute',
  width: '100%',
  height: '100%',});

export const SplitView = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
});

// ⬇️ FIXED: now LeftSection accepts children
export const LeftSection = ({ children }: { children?: React.ReactNode }) => (
  <div
    style={{
      flex: 1,
      backgroundColor: palettes.gray,
      position: "relative", // ✅ allow absolute positioning
      overflow: "hidden",   // ✅ hides OffCanvas when off-screen

    }}
  >
    {children}
  </div>
);

export const RightSection = ({ children }: { children?: React.ReactNode }) => (
  <div
    style={{
      flex: 1,
      backgroundColor: palettes.white,
      position: "relative",
    }}
  >
    {children}
  </div>
);

export const CentralText = styled('div')({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2,
  color: palettes.textDark,
fontFamily: "var(--font-montserrat)",  // ✅ Apply Montserrat
  fontSize: "200px",
  fontWeight: 800,
  lineHeight: 0.9,
  letterSpacing: "-0.05em",
  userSelect: 'none',
});

export const RedDot = styled("span")({
  display: 'inline-block',
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: palettes.bynd_red,
  borderRadius: '50%',
  marginLeft: '1rem',
  verticalAlign: 'middle',
});