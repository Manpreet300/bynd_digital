"use client";
import { styled } from "@mui/material/styles";
import { fraunces, montserrat } from "@/components/themes/primary/typography";
import { Typography } from "@mui/material";


export const StrategiesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "var(--background)", // ✅ was var(--bg-color)
  color: "var(--text-color)",
  transition: "background-color 0.3s ease, color 0.3s ease",
});

export const UpperContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "80px",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
});

export const TitleBox = styled("div")({
  fontSize: "52px",
  letterSpacing: "-3%",
  fontWeight: 800,
  fontFamily: fraunces.style.fontFamily,
  lineHeight: "100%",
  width: "100%",
  color: "var(--text-color)",
  transition: "color 0.3s ease",
});

export const TextBox = styled("div")({
  fontSize: "0.95rem",
  color: "var(--secondary-text)", // ✅ was var(--subtext-color)
  lineHeight: 1.6,
  marginTop: "1.2rem",
  width: "70%",
  marginLeft: "auto",
  transition: "color 0.3s ease",
});

export const LowerContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  padding: "4rem",
  boxSizing: "border-box",
  backgroundColor: "var(--white-bg)", // ✅ was var(--card-bg)
  transition: "background-color 0.3s ease, color 0.3s ease",
});

export const WebDevelopment = styled("div")({
  flex: "0 0 25%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "0.8rem",
  fontFamily: montserrat.style.fontFamily,
  fontSize: "1rem",
  fontWeight: 700,
  color: "var(--text-color)",
  transition: "color 0.3s ease",
});

export const Number = styled("div")({
  fontWeight: 700,
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  color: "var(--text-color)",
  opacity: 0.8,
  transition: "color 0.3s ease",
});

export const Title = styled("div")({
  fontWeight: 800,
  fontSize: "1.2rem",
  letterSpacing: "1px",
  color: "var(--text-color)",
  transition: "color 0.3s ease",
});

export const Content = styled("div")({
  flex: "1",
  paddingLeft: "2rem",
  borderTop: "2px solid var(--border-color)",
  marginTop: "0.5rem",
  fontSize: "0.95rem",
  color: "var(--text-color)",
  lineHeight: 1.8,
  transition: "color 0.3s ease, border-color 0.3s ease",
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  li: {
    margin: "0.3rem 0",
  },
});
