"use client";
 
import { styled } from "@mui/material/styles";
import { palettes } from "@/components/themes/palettes";
 
export const StyledGalleryContainer = styled("section")(() => ({
  width: "100vw",
  height: "150vh",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  position: "relative",
}));
 
export const StyledGridWrapper = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
  width: "100%",
  height: "100%",
  gap: 0,
  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@media (max-width: 320px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
  },
}));
 
export const StyledGridItem = styled("div", {
  shouldForwardProp: (prop) => prop !== "hasImage",
})<{ hasImage?: boolean }>(({ hasImage }) => ({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: hasImage ? "transparent" : palettes.light || "#f5f5f5",
  transition: "all 0.3s ease",
  cursor: hasImage ? "pointer" : "default",
 
  "&:hover": {
    transform: hasImage ? "scale(1.01)" : "scale(1.0)",
    filter: hasImage ? "brightness(0.5)" : "brightness(1)",
    boxShadow: hasImage ? "0 8px 25px rgba(0,0,0,0.15)" : "none",
  },
  "@media (max-width: 768px)": {
    display: hasImage ? "flex" : "none",
  },
}));
 
export const StyledImageContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
  position: "relative",
 
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  [`${StyledGridItem}:hover & img`]: {
    transform: "scale(1.5)",
  },
}));
 
export const StyledEmptyContainer = styled("div")(() => ({
  color: palettes.gray || "#999",
  fontSize: "14px",
  textAlign: "center",
  opacity: 0.7,
  userSelect: "none",
}));
 