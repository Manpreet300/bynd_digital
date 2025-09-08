"use client";
import React from "react";
import data from "./data.json";
import { Styles } from "./elements";

export const InformationSection: React.FC = () => {
  return (

    <div className="page-wrapper">
      <Styles />
      
    
      <div className="background-image-layer" />

      <main className="page-container">
    
        <div className="hero-section">
          <h1 className="hero-section__heading">
            We craft powerful digital strategies that elevate brands, drive
            engagement, and deliver real results.
          </h1>
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
     
        <div className="services-list">
          {data.sections.map((section) => (
            <div key={section.id} className="service-item">
              <div className="service-item__header">
                <span className="service-item__id">{section.id}</span>
                <h2 className="service-item__title">{section.title}</h2>
              </div>
              <div className="service-item__body">
                <hr className="service-item__divider" />
                <div className="service-item__description-list">
                  {section.description.map((desc, idx) => (
                    <span key={idx} className="service-item__description">
                      {desc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};