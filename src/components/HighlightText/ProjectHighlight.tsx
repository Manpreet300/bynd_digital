"use client";
import React from "react";
import { HighlightsContainer, HeroHeading, HighlightStrategy, HighlightResult } from "./elements";
import { ProjectHighlightsProps } from "./interface";

export const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({
  className,
  headingText = "Selection of projects highlighting a variety of work.",
  strategyText = "projects",
  resultText = "work",
  strategyHighlight = true,
  resultHighlight = true,
}) => {
  return (
    <HighlightsContainer className={className}>
      <HeroHeading>
        {headingText.split(strategyText).map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index === 0 && strategyText && (
              strategyHighlight ? (
                <HighlightStrategy>{strategyText}</HighlightStrategy>
              ) : (
                <span>{strategyText}</span>
              )
            )}
          </React.Fragment>
        ))}
        {resultText && (
          resultHighlight ? (
            <HighlightResult>{resultText}</HighlightResult>
          ) : (
            <span>{resultText}</span>
          )
        )}
        {headingText.split(resultText).slice(1).map((part, index) => (
          <React.Fragment key={index + 1}>{part}</React.Fragment>
        ))}
      </HeroHeading>
    </HighlightsContainer>
  );
};