"use client";
import { styled } from "@mui/material/styles";
import { palettes } from "@/components/themes/palettes";

export const CTAContainer = styled("section")({

  paddingTop: "504px",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  padding: "4rem 2rem",
});

export const CTATextWrapper = styled("div")({
  maxWidth: "900px",
  textAlign: "center",
});

export const Headline = styled("h2")({
  fontFamily: "var(--font-fraunces)", // ✅ use Fraunces
  fontSize: "3rem",
  fontWeight: 700,
  color: palettes.textDark,
  lineHeight: 1.2,
});

export const Highlight = styled("span")({
  position: "relative",
  fontWeight: 700,
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: -4,
    width: "100%",
    height: "6px",
    backgroundColor: palettes.bynd_red,
    borderRadius: "4px",
  },
});

export const QuestionMark = styled("span")({
  color: palettes.bynd_red,
  fontWeight: 800,
});

export const CTAButton = styled("a")({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2rem",
  padding: "0.75rem 1.5rem",
  fontSize: "0.9rem",
  fontWeight: 600,
  borderRadius: "50px",
  backgroundColor: palettes.bynd_red,
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#ff6d63",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
  },
});