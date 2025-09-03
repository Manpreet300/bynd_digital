"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const ToggleWrapper = styled("div")({
  position: "absolute",
  bottom: "0",
  right: "0",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  zIndex: 5,
});

const ToggleText = styled("span")({
  fontSize: "0.75rem",
  fontWeight: "bold",
  color: "#000",
});

const StyledIconButton = styled("button")({
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  color: "#000",
  display: "flex",
});

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <ToggleWrapper onClick={() => setDarkMode(!darkMode)}>
      <ToggleText>{darkMode ? "LIGHT MODE" : "DARK MODE"}</ToggleText>
      <StyledIconButton>
        <Brightness4Icon fontSize="small" />
      </StyledIconButton>
    </ToggleWrapper>
  );
};
