"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ToggleWrapper = styled("div")({
  position: "absolute",
  bottom: "2rem",
  right: "2rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  cursor: "pointer",
  zIndex: 5,
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 0.8,
  },
});

const ToggleText = styled("span")({
  fontSize: "0.75rem",
  fontWeight: "bold",
  color: "var(--text-color)",
  transition: "color 0.3s ease",
});

const StyledIconButton = styled("button")({
  background: "none",
  border: "none",
  padding: "8px",
  cursor: "pointer",
  color: "var(--icon-color)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "color 0.3s ease, transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const newTheme = !darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ToggleWrapper onClick={toggleDarkMode}>
      <ToggleText>{darkMode ? "LIGHT MODE" : "DARK MODE"}</ToggleText>
      <StyledIconButton aria-label="Toggle dark mode">
        {darkMode ? (
          <Brightness7Icon fontSize="small" />
        ) : (
          <Brightness4Icon fontSize="small" />
        )}
      </StyledIconButton>
    </ToggleWrapper>
  );
};