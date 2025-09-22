"use client";
import React, { useState, useEffect, useRef } from "react";
import data from "./data.json";
import { GlobalStyles } from '@mui/material';
import {
  globalStyles,
  PageWrapper,
  BackgroundImageLayer,
  PageContainer,
  HeroSection,
  HeroHeading,
  HeroTextWrapper,
  HeroText,
  ServicesTabContainer,
  ServicesTabInner,
  ServicesTabNumbers,
  TabNumberRow,
  TabNumber,
  TabTitle,
  ServicesTabContent,
  TabContent,
  ServiceItemDivider,
  ServiceItemDescriptionList,
  ServiceItemDescription,
  HighlightResult,
  HighlightStrategy
} from "./elements";
import { InformationSectionProps, ServiceSection, ResponsiveState } from "./interface";

export const InformationSection: React.FC<InformationSectionProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [responsive, setResponsive] = useState<ResponsiveState>({
    isMobile: false,
    isTablet: false,
    isDesktop: true
  });
  
  const servicesContainerRef = useRef<HTMLDivElement>(null);
  const tabContentRef = useRef<HTMLDivElement>(null);

  // Handle responsive state and dynamic height
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setResponsive({
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 992,
        isDesktop: width > 992
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust container height based on active content
  useEffect(() => {
    if (servicesContainerRef.current && tabContentRef.current) {
      const activeContent = tabContentRef.current.querySelector('.tab-content.active') as HTMLElement;
      if (activeContent) {
        const contentHeight = activeContent.scrollHeight;
        const minHeight = responsive.isMobile ? '80vh' : '70vh';
        const dynamicHeight = Math.max(contentHeight + 200, parseInt(minHeight.replace('vh', '')) * window.innerHeight / 100);
        
        servicesContainerRef.current.style.minHeight = `${Math.min(dynamicHeight, window.innerHeight * 1.2)}px`;
      }
    }
  }, [activeIndex, responsive]);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleTabHover = (index: number) => {
    if (responsive.isDesktop) {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <PageWrapper className={className}>
        <BackgroundImageLayer />

        <PageContainer>
          {/* Hero Section */}
          <HeroSection>
            <HeroHeading>
              We craft powerful digital{" "}
              <HighlightStrategy>strategies</HighlightStrategy> that elevate
              brands, drive engagement, and deliver real{" "}
              <HighlightResult>results.</HighlightResult>
            </HeroHeading>

            <HeroTextWrapper>
              <HeroText>
                With our innovative and tailored approach, we deliver remarkable
                digital marketing solutions that meet the unique needs of each client.
                Our global client base includes businesses from Indonesia, the
                Philippines, Australia, Malaysia, Italy, Argentina, Singapore, the
                UK, Panama, and the United States.
              </HeroText>
              <HeroText>
                We specialize in helping companies from diverse industries,
                including hospitality, real estate, food and beverages, beauty
                and lifestyle, medical, energy, showbiz-business, media
                production, construction, NGOs, and many others.
              </HeroText>
            </HeroTextWrapper>
          </HeroSection>

          {/* Services Tabs */}
          <ServicesTabContainer ref={servicesContainerRef}>
            <ServicesTabInner>
              {/* Tab Navigation */}
              <ServicesTabNumbers>
                {data.sections.map((section: ServiceSection, index: number) => (
                  <TabNumberRow
                    key={section.id}
                    $isActive={activeIndex === index}
                    onClick={() => handleTabClick(index)}
                    onMouseEnter={() => handleTabHover(index)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={activeIndex === index}
                  >
                    <TabNumber>{section.id}</TabNumber>
                    <TabTitle>{section.title}</TabTitle>
                  </TabNumberRow>
                ))}
              </ServicesTabNumbers>

              {/* Tab Content */}
              <ServicesTabContent ref={tabContentRef}>
                {data.sections.map((section: ServiceSection, index: number) => (
                  <TabContent
                    key={section.id}
                    className={`tab-content ${activeIndex === index ? "active" : ""}`}
                    $isActive={activeIndex === index}
                    aria-hidden={activeIndex !== index}
                  >
                    <ServiceItemDivider />
                    <ServiceItemDescriptionList>
                      {section.description.map((desc: string, idx: number) => (
                        <ServiceItemDescription key={idx}>
                          {desc}
                        </ServiceItemDescription>
                      ))}
                    </ServiceItemDescriptionList>
                  </TabContent>
                ))}
              </ServicesTabContent>
            </ServicesTabInner>
          </ServicesTabContainer>
        </PageContainer>
      </PageWrapper>
    </>
  );
};