"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { StyledContainer, MarqueeText } from "./elements";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const countries = [
  "Philippines",
  "Japan",
  "United States",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Brazil",
  "United Kingdom",
  "South Korea",
];

export const Globe: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const marqueeCount = isSmallScreen ? 2 : isMediumScreen ? 6 : 6;

  const marquees = Array.from({ length: marqueeCount }, (_, index) => {
    const direction = index % 2 === 0 ? "right" : "left";
    const speed = isSmallScreen ? 30 : isMediumScreen ? 40 : 50; 
    return (
      <Marquee
        key={`marquee-${index}`}
        direction={direction}
        speed={speed}
        gradient={false}
      >
        {countries.map((country, idx) => (
          <MarqueeText key={`${direction}-${index}-${idx}`}>
            {country}
          </MarqueeText>
        ))}
      </Marquee>
    );
  });

  return (
    <StyledContainer>
      {marquees}
      <Image
        src="/globe-transparent.png"
        alt="Globe"
        width={1000}
        height={609}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: isSmallScreen ? "80vw" : isMediumScreen ? "70vw" : "60vw", 
          height: "auto", 
          maxWidth: "100%", 
          maxHeight: "80vh", 
          objectFit: "contain", 
        }}
      />
    </StyledContainer>
  );
};