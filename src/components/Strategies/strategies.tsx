"use client";
import React from "react";
import { StrategiesContainer, UpperContainer, LowerContainer, TitleBox, TextBox, WebDevelopment, Content, Number, Title } from "./element";
import { DarkModeToggle } from "@/components/common/DarkModeToggle";
export const Strategies: React.FC = () => {
  return (
    <StrategiesContainer>
      
      <UpperContainer>
        <TitleBox>
          We craft powerful digital <span>strategies</span> that elevate brands,
          drive engagement, and{" "}
          <span style={{ display: "inline-block", position: "relative" }}>
            <strong>deliver real results.</strong>
            <img
              src="/line.png"
              alt="underline"
              style={{
                position: "absolute",
                bottom: -10,
                left: 0,
                width: "30%",
                height: "auto",
              }}
            />
          </span>
        </TitleBox>

        <TextBox>
          With our innovative and tailored approach, we deliver remarkable
          digital marketing solutions that meet the unique needs of each client.
          Our global client base includes businesses from Indonesia, the
          Philippines, Australia, Malaysia, Italy, Argentina, Singapore, the UK,
          Panama, and the United States.
        </TextBox>

        <TextBox>
          We specialize in helping companies from diverse industries, including
          hospitality, real estate, food and beverages, beauty and lifestyle,
          medical, energy, showbusiness, media production, construction, NGOs,
          and many others.
        </TextBox>
      </UpperContainer>
        <DarkModeToggle /> 
      <LowerContainer>
        <WebDevelopment>
          <Number>01</Number>
          <Title>WEB DEVELOPMENT</Title>
        </WebDevelopment>

        {/* <Content>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li>Custom Website Design</li>
            <li>Responsive Web Development</li>
            <li>UI/UX Design</li>
            <li>Landing Page Development</li>
            <li>E-commerce Website Development</li>
            <li>Shopify/WooCommerce Development</li>
            <li>Payment Gateway Integration</li>
            <li>Product Catalog Management</li>
            <li>Security Updates & Bug Fixes</li>
            <li>Performance Optimization</li>
            <li>Content Updates</li>
            <li>Backup & Recovery</li>
            <li>Custom Web App Development</li>
            <li>API Development & Integration</li>
            <li>Database Management</li>
            <li>Progressive Web Apps (PWA)</li>
            <li>Technical SEO Implementation</li>
            <li>Speed & Performance Optimization</li>
            <li>Mobile & Accessibility Optimization</li>
            <li>Domain Registration & Management</li>
            <li>Website Hosting & Server Setup</li>
            <li>SSL Certificate Installation</li>
          </ul>
        </Content> */}
      </LowerContainer>
    </StrategiesContainer>
  );
};
