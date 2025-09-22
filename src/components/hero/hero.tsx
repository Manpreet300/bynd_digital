// components/hero/hero.tsx
"use client";
import React from "react";
import { HeroContainer, SplitView, LeftSection, RightSection, CentralText, RedDot } from "./element";
import { Menu } from "@/components/menu/menu";
import { OffCanvas } from "@/components/off_canvas/off_canvas";
import { SocialIcon } from "@/components/social-icons/social-icon";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { DarkModeToggle } from "@/components/common/DarkModeToggle";


export const Hero: React.FC = () => {
  const [isCanvasOpen, setIsCanvasOpen] = React.useState(false);

  return (
    <HeroContainer>
      <SplitView>
        <LeftSection>
          <Menu onClick={() => setIsCanvasOpen(true)} />
          <ScrollIndicator />
          <OffCanvas isOpen={isCanvasOpen} onClose={() => setIsCanvasOpen(false)} />
        </LeftSection>

        <RightSection>
          <SocialIcon />
          <DarkModeToggle />
        </RightSection>
      </SplitView>

      <CentralText>
        BY<br />
        ND<RedDot />
      </CentralText>
    </HeroContainer>
  );
};