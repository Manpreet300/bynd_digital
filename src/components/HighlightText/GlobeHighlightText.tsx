"use client";
import React from "react";
import { HighlightsContainer, HeroHeading, HighlightStrategy, HighlightResult } from "./elements";
import { ProjectHighlightsProps } from "./interface";

export const GlobeHighlightText: React.FC<ProjectHighlightsProps> = ({
  className,
  headingText = "Serving Businesses Acroos the Globe",
  strategyText = "Serving",
  resultText = "Globe",
  strategyHighlight = true,
  resultHighlight = true,
}) => {
  return (
    <HighlightsContainer className={className}>
      <HeroHeading>
        {/* Split heading into parts and render with highlights */}
        {headingText.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word === strategyText && strategyHighlight ? (
              <HighlightStrategy>{strategyText}</HighlightStrategy>
            ) : word === resultText && resultHighlight ? (
              <HighlightResult>{resultText}</HighlightResult>
            ) : (
              <span>{word}</span>
            )}
            {index < headingText.split(" ").length - 1 && " "}
          </React.Fragment>
        ))}
      </HeroHeading>
    </HighlightsContainer>
  );
};