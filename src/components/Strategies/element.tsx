"use client";
import { styled } from "@mui/material/styles";
import { fraunces } from "@/components/themes/typography";
import { montserrat } from "@/components/themes/typography";
import { Typography } from "@mui/material";
export const StrategiesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
     // top/bottom & left/right padding
  width: "100%",
  boxSizing: "border-box", // ✅ ensures padding doesn’t shrink the width
});

export const UpperContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding:"80px",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",        // ✅ makes text block take full width
});

export const TitleBox = styled("div")({
  fontSize: "52px",
  letterSpacing: "-3%",
  fontWeight: 800,
  fontFamily: fraunces.style.fontFamily,
  lineHeight: "100%",
  width: "100%",        // ✅ full width for headline
});

export const TextBox = styled("div")({
  fontSize: "0.95rem",
  color: "#555",
  lineHeight: 1.6,
  marginTop: "1.2rem",
  width: "70%",
    marginLeft: "auto", 
});

export const LowerContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  padding: "4rem",
  boxSizing: "border-box",
  backgroundColor: "#fff",  // or keep bg image if needed
});
export const WebDevelopment = styled("div")({
  flex: "0 0 25%", // left side takes 25% width
  display: "flex",
  flexDirection: "row",
  alignItems: "center",   // ✅ correct usage
  justifyContent: "flex-start",
  gap: "0.8rem",          // ✅ space between number and title
  fontFamily: montserrat.style.fontFamily,
  fontSize: "1rem",
  fontWeight: 700,
  color: "#000",
});
export const Number = styled("div")({
  fontWeight: 700,
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
});

export const Title = styled("div")({
  fontWeight: 800,
  fontSize: "1.2rem",
  letterSpacing: "1px",
});

export const Content = styled("div")({
  flex: "1",
  paddingLeft: "2rem",
  borderTop: "2px solid #e53935", // ✅ red border like your screenshot
  marginTop: "0.5rem",
  fontSize: "0.95rem",
  color: "#333",
  lineHeight: 1.8,
});