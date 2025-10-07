"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ProjectHighlights } from "../HighlightText/ProjectHighlight";
import {
  StyledGalleryContainer,
  StyledGridWrapper,
  StyledGridItem,
  StyledImageContainer,
  StyledEmptyContainer,
} from "./element";
import { GalleryItem, GalleryProps } from "./interface";

const createImageItem = (id: number, imageSrc: string, imageAlt: string): GalleryItem => ({
  id,
  hasImage: true,
  imageSrc,
  imageAlt,
});

const createEmptyItem = (id: number): GalleryItem => ({
  id,
  hasImage: false,
});

const generateGalleryData = (): GalleryItem[] => {
  const items: GalleryItem[] = [];

  items.push(
    createImageItem(0, "/1.png", "Gallery image 1"),
    createEmptyItem(1),
    createEmptyItem(2),
    createImageItem(3, "/2.png", "Gallery image 2")
  );

  items.push(
    createEmptyItem(4),
    createImageItem(5, "/3.png", "Gallery image 3"),
    createImageItem(6, "/4.png", "Gallery image 4"),
    createEmptyItem(7)
  );

  items.push(
    createImageItem(8, "/5.png", "Gallery image 5"),
    createEmptyItem(9),
    createEmptyItem(10),
    createImageItem(11, "/6.png", "Gallery image 6")
  );

  items.push(
    createImageItem(12, "/7.png", "Gallery image 7"),
    createEmptyItem(13),
    createImageItem(14, "/8.png", "Gallery image 8"),
    createEmptyItem(15)
  );

  items.push(
    createEmptyItem(16),
    createImageItem(17, "/9.png", "Gallery image 9"),
    createEmptyItem(18),
    createImageItem(19, "/10.png", "Gallery image 10")
  );

  return items;
};
const GallerySection: React.FC<GalleryProps> = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 480);
      setIsTablet(width > 480 && width <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const galleryItems = items || generateGalleryData();
  
  // Filter items based on screen size
  const filteredItems = (isMobile || isTablet) 
    ? galleryItems.filter(item => item.hasImage) // Show only items with images on mobile/tablet
    : galleryItems; // Show all items (including empty) on desktop

  const renderGalleryItem = (item: GalleryItem) => (
    <StyledGridItem key={item.id} hasImage={item.hasImage}>
      {item.hasImage && item.imageSrc ? (
        <StyledImageContainer>
          <Image
            src={item.imageSrc}
            alt={item.imageAlt || `Gallery image ${item.id + 1}`}
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={item.id < 4}
          />
        </StyledImageContainer>
      ) : (
        <StyledEmptyContainer />
      )}
    </StyledGridItem>
  );

  return (
    <StyledGalleryContainer>
      <StyledGridWrapper>
        {filteredItems.map(renderGalleryItem)}
      </StyledGridWrapper>
    </StyledGalleryContainer>
  );
};

export default GallerySection;