import React from 'react';


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
      max-width: 1050px;
      margin: 0 auto;
      padding: 6rem 1.5rem;
    }


    .hero-section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.5rem;
      margin-bottom: 8rem;
    }

    .hero-section__heading {
      font-size: clamp(2.8rem, 7vw, 3.8rem);
      font-weight: 700;
      color: var(--color-text-dark);
      line-height: 1.2;
      letter-spacing: -0.025em;
      max-width: 950px;
    }

    .hero-section__text-wrapper {
      margin-left: auto;
      width: 100%;
      max-width: 50%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    
    .hero-section__text {
      font-size: 0.95rem;
      line-height: 1.8;
      color: var(--color-text-medium);
      font-weight: 400;
    }

    .services-list {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }

    .service-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 4rem;
    }

    .service-item__header {
      flex: 0 0 250px;
      display: flex;
      gap: 1.25rem;
      padding-top: 2px;
    }
    
    .service-item__id {
      font-size: 1rem;
      font-weight: 600;
      color: var(--color-text-id);
      line-height: 1.5;
    }

    .service-item__title {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--color-text-dark);
      letter-spacing: 0.1em;
      text-transform: uppercase;
      line-height: 1.5;
    }

    .service-item__body {
      flex: 1;
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
      gap: 0.6rem;
    }

    .service-item__description {
      font-size: 0.9rem;
      line-height: 1.6;
      color: var(--color-text-medium);
      font-weight: 400;
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