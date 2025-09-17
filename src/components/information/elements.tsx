import React from 'react';

import { fraunces, montserrat } from "@/components/themes/primary/typography";
export const Styles = () => (
  <style jsx global>{`
    :root {
      --color-text-dark: #1d1d1f;
      --color-text-medium: #555555;
      --color-text-id: #666666;
      --color-divider-red: #d94e56;
      --font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }

  
    .page-wrapper {
      position: relative; 
      background-color: #fdfdfd; 
    }

    body {
      font-family: var(--font-family-sans);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0; 
    }
    
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 0.05; }
    }

    .background-image-layer {
      position: fixed; /* Position relative to the browser window */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    
  
      background-size: cover;
      background-position: center;
      z-index: -1; 
      opacity: 0;
      
      animation: fadeIn 2s ease-out forwards; 
    }

    .page-container {
      max-width: 100%;
      margin: 0 auto;
      padding:4rem 0;
      height:120vh;
      
    }


    .hero-section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.5rem;
      padding: 0 4rem;
   
    }

    .hero-section__heading {
      font-size: 52px;
      font-weight: 800;
      color: var(--color-text-dark);
      line-height: 100%;
      letter-spacing: -3%;
      font-family: ${montserrat.style.fontFamily};
      max-width: 100%;
    }

    .hero-section__text-wrapper {
      margin-left: auto;
      // width: 100%;
      max-width: 60%;
      // display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .hero-section__text {
      font-size: 18px;
       font-family: ${fraunces.style.fontFamily};
      line-height: 100%;
      color:balck;
      font-weight: 300;
      margin-bottom:2rem;
    }

    .services-list {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
      justify-content:space-between;
    }

    .service-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap:5rem;
    }

.service-item__header {
  flex: 1 0 250px;
  display: flex;
  gap: 1.25rem;
  padding-top: 2px;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
    
    .service-item__id {
      font-size: 1rem;
      font-weight: 600;
      color:black;
      font-family: ${montserrat.style.fontFamily};
      line-height: 100%;
    }

    .service-item__title {
      font-size:18px;
      font-weight: 800;
      color: var(--color-text-dark);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-family: ${montserrat.style.fontFamily};
      line-height: 100%;
    
    }
.service-item__header.active,
.service-item__header:hover {
  color: var(--color-divider-red);
}

.services-tab-container {
  display: flex;
   width:100%;
   justify-content:space-between;
   background-image: url("/strategies-bg.png");
   background-repeat: no-repeat;
  background-position: center;
   background-size: cover;
   padding: 0 4rem;
   height:700px;
  
}

/* Left column: number + title in a row */
.services-tab-numbers {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  heught:100vh;
  width:40%
}

.tab-number-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;
  color: var(--color-text-id);
  font-family: ${montserrat.style.fontFamily};
  font-weight: 600;
}

.tab-number-row.active,
.tab-number-row:hover {
  color: var(--color-divider-red);
}

.tab-number {
  font-weight: 800;
}

.tab-title {
  font-weight: 800;
   font-family: ${fraunces.style.fontFamily};
    color:black;
    font-size:18px;
}

/* Right column content */
.services-tab-content {
  flex: 1;
  position: relative;
  
}

.tab-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.tab-content.active {
  opacity: 1;
  pointer-events: auto;
}
.service-item__body {
  transition: opacity 0.3s ease;
  flex: 3;
      padding-top: 0.5rem;
}
    
    .service-item__divider {
      border: none;
      height: 1px;
      background-color: var(--color-divider-red);
      margin: 0;
      margin-bottom: 1.25rem;
    }

    .service-item__description-list {
      display: flex;
      flex-direction: column;
      font-size:18px;
      gap: 0.6rem;
     font-family: ${fraunces.style.fontFamily};
    }

    .service-item__description {
      font-size: 18px;
      line-height: 100%;
      color: black;
      font-weight: 400;
        font-family: ${fraunces.style.fontFamily};
        letter-spacing:-3%;
    }

// highlight text

/* ---- Result Underline ---- */
.highlight-result {
  position: relative;
  display: inline-block;
}

.highlight-result::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -60px; /* adjust depending on font */
  width: 100%;
  height: 120px; /* depends on your image height */
  background: url('/line.png') no-repeat center;
  background-size: contain;
  pointer-events: none;
}

/* ---- Strategies Circle ---- */
.highlight-strategy {
  position: relative;
  display: inline-block;
  padding: 0 4px; /* extra spacing for circle fit */
}

.highlight-strategy::before {
  content: "";
  position: absolute;
  top: -18px;
  left: -25px;
  width: 120%;
  height: 170%;
  background: url('/circle.png') no-repeat center;
  background-size: contain;
  pointer-events: none;
}
    /* --- Responsive Design --- */
    @media (max-width: 992px) {
      .hero-section__text-wrapper {
        max-width: 60%;
      }
    }

    @media (max-width: 768px) {
      .page-container {
        padding: 4rem 1rem;
      }
       .hero-section {
        gap: 2rem;
        margin-bottom: 5rem;
       }
       .hero-section__text-wrapper {
        margin-left: 0;
        max-width: 100%;
       }
       .service-item {
        flex-direction: column;
        gap: 1.5rem;
      }
      .service-item__header {
        flex-basis: auto;
      }
      .service-item__body {
        padding-top: 0;
        width: 100%;
      }
    }
  `}</style>
);