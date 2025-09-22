// components/hero/elevate.tsx
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
import { ImageProps } from "./interface";

// Define all your image sources at the top
const FLOURISH_IMAGE_SRC = "/quotation.png";
const UNDERLINE_IMAGE_SRC = "/underline.png";
const QUESTION_MARK_SRC = "/question.png";

export const Elevate: React.FC = () => {
  return (
    <ElevateSection>
      <ElevateContainer>


        <ElevateText>
          Are you <span style={{ position: 'relative' }}>
            ready
            <UnderlineImage src={UNDERLINE_IMAGE_SRC} alt="Red underline" />
          </span> to elevate your<br />
          <span className="digital-presence">
            digital presence
            <QuestionMarkImage src={QUESTION_MARK_SRC} alt="Question mark" />
          </span>
        </ElevateText>
                <CallToActionWrapper>
          <FlourishImage src={FLOURISH_IMAGE_SRC} alt="Decorative flourish" />
          <LetsTalkButton>
            LET&apos;S TALK <ArrowRight />
          </LetsTalkButton>
        </CallToActionWrapper>
      </ElevateContainer>
    </ElevateSection>
  );
};