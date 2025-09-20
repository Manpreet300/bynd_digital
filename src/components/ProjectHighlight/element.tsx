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
  
  "@media (max-width: 768px)": {
    height: "100vh",
  },
  "@media (max-width: 480px)": {
    height: "80vh",
  },
}));

export const StyledGridWrapper = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  width: "100%",
  height: "100%",
  gap: 0,
  
  "@media (max-width: 1024px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
  },
  "@media (max-width: 768px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
  },
  "@media (max-width: 480px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
    gridTemplateRows: "repeat(6, 1fr)",
  },
}));

export const StyledGridItem = styled("div", {
  shouldForwardProp: (prop) => prop !== "hasImage",
})<{ hasImage?: boolean }>(({ hasImage }) => {
  const defaultBgColor = palettes.light || "#f5f5f5";
  const hoverScale = hasImage ? "scale(1.01)" : "scale(1.0)";
  const hoverFilter = hasImage ? "brightness(0.5)" : "brightness(1)";
  const hoverShadow = hasImage ? "0 8px 25px rgba(0,0,0,0.15)" : "none";

  return {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: hasImage ? "transparent" : defaultBgColor,
    transition: "all 0.3s ease",
    cursor: hasImage ? "pointer" : "default",
    minHeight: "150px",

    "&:hover": {
      transform: hoverScale,
      filter: hoverFilter,
      boxShadow: hoverShadow,
    },

    "@media (max-width: 768px)": {
      display: hasImage ? "flex" : "none",
      minHeight: "200px",
    },
    
    "@media (max-width: 480px)": {
      minHeight: "250px",
    },
  };
});

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
    transform: "scale(1.1)",
    transition: "transform 0.3s ease",
  },
  
  "@media (max-width: 768px)": {
    [`${StyledGridItem}:hover & img`]: {
      transform: "scale(1.05)",
    },
  },
}));

export const StyledEmptyContainer = styled("div")(() => {
  const textColor = palettes.gray || "#999";
  
  return {
    color: textColor,
    fontSize: "14px",
    textAlign: "center",
    opacity: 0.7,
    userSelect: "none",
  };
});