"use client";
import React, { useState } from "react";
import data from "./data.json";
import { Styles } from "./elements";

export const InformationSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // default open first

  return (
    <div className="page-wrapper">
      <Styles />

      <div className="background-image-layer" />

      <main className="page-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="hero-section__heading">
            We craft powerful digital{" "}
            <span className="highlight-strategy">strategies </span> that elevate
            brands, drive engagement, and deliver real{" "}
            <span className="highlight-result">results.</span>
          </h1>

          {/* Hero text paragraphs */}
          <div className="hero-section__text-wrapper">
            <p className="hero-section__text">
              With our innovative and tailored approach, we deliver remarkable
              digital marketing solutions that meet the unique needs of each client.
              Our global client base includes businesses from Indonesia, the
              Philippines, Australia, Malaysia, Italy, Argentina, Singapore, the
              UK, Panama, and the United States.
            </p>
            <p className="hero-section__text">
              We specialize in helping companies from diverse industries,
              including hospitality, real estate, food and beverages, beauty
              and lifestyle, medical, energy, showbiz-business, media
              production, construction, NGOs, and many others.
            </p>
          </div>
        </div>

        {/* Services Tabs */}
        <div className="services-tab-container">
          {/* Left Column: Numbers and Titles Side by Side */}
          <div className="services-tab-numbers">
            {data.sections.map((section, index) => (
              <div
                key={section.id}
                className={`tab-number-row ${
                  activeIndex === index ? "active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className="tab-number">{section.id}</span>
                <span className="tab-title">{section.title}</span>
              </div>
            ))}
          </div>

          {/* Right Column: Content */}
          <div className="services-tab-content">
            {data.sections.map((section, index) => (
              <div
                key={section.id}
                className={`tab-content ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                
                <hr className="service-item__divider" />
                <div className="service-item__description-list">
                  {section.description.map((desc, idx) => (
                    <span key={idx} className="service-item__description">
                      {desc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
