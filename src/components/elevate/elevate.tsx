"use client";
import React from "react";
import {
  ElevateSection,
  ElevateContainer,
  CallToActionWrapper,
  FlourishImage,
  LetsTalkButton,
  ArrowRight,
  ElevateText,
  UnderlineImage,
  QuestionMarkImage 
} from "./elements";
import { fraunces } from "@/components/themes/typography";

const FLOURISH_IMAGE_SRC = "/quotation.png";
const UNDERLINE_IMAGE_SRC = "/underline.png";
const QUESTION_MARK_SRC = "/question.png"; // Add the new image source

export const Elevate: React.FC = () => {
  return (
    <ElevateSection>
      <ElevateContainer className={fraunces.variable}>

        <CallToActionWrapper>
          <FlourishImage src={FLOURISH_IMAGE_SRC} alt="Decorative flourish" />
          <LetsTalkButton>
            LET&apos;S TALK <ArrowRight />
          </LetsTalkButton>
        </CallToActionWrapper>

        <ElevateText  className={fraunces.className}>
  Are you <span style={{ position: 'relative' }}>
    ready
    <UnderlineImage src={UNDERLINE_IMAGE_SRC} alt="Red underline" />
  </span> to elevate your<br/>
  <span className="digital-presence">
    digital presence
    <QuestionMarkImage src={QUESTION_MARK_SRC} alt="Question mark" />
  </span>
</ElevateText>

      </ElevateContainer>
    </ElevateSection>
  );
};
