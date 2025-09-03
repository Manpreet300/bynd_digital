"use client";
import React from "react";
import { CTAContainer, CTATextWrapper, Headline, Highlight, QuestionMark, CTAButton } from "./element";

export const CallToAction: React.FC = () => {
  return (
    <CTAContainer>
      <CTATextWrapper>
        <Headline>
          Are you <Highlight>ready</Highlight> <br />
          to elevate your <br />
          digital presence<QuestionMark>?</QuestionMark>
        </Headline>

        <CTAButton href="#contact">LET’S TALK →</CTAButton>
      </CTATextWrapper>
    </CTAContainer>
  );
};