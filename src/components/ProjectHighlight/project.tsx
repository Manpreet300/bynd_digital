"use client";
import React from "react";
import Image from "next/image";
import {
  StyledGalleryContainer,
  StyledGridWrapper,
  StyledGridItem,
  StyledImageContainer,
  StyledEmptyContainer,
} from "./element";
 
interface GalleryItem {
  id: number;
  hasImage: boolean;
  imageSrc?: string;
  imageAlt?: string;
}
 
const GallerySection: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    //First Row
    {
      id: 0,
      hasImage: true,
      imageSrc: "https://picsum.photos/200",
      imageAlt: "Gallery image 1",
    },
    {
      id: 1,
      hasImage: false,
    },
    {
      id: 2,
      hasImage: false,
    },
    {
      id: 3,
      hasImage: true,
      imageSrc: "https://picsum.photos/300",
      imageAlt: "Gallery image 2",
    },
 
    //Second Row
    {
      id: 4,
      hasImage: false,
    },
    {
      id: 5,
      hasImage: true,
      imageSrc: "https://picsum.photos/500",
      imageAlt: "Gallery image 3",
    },
    {
      id: 6,
      hasImage: true,
      imageSrc: "https://picsum.photos/700",
      imageAlt: "Gallery image 4",
    },
    {
      id: 7,
      hasImage: false,
    },
    //Third Row
    {
      id: 8,
      hasImage: true,
      imageSrc: "https://picsum.photos/600",
      imageAlt: "Gallery image 5",
    },
    {
      id: 9,
      hasImage: false,
    },
    {
      id: 10,
      hasImage: true,
      imageSrc: "https://picsum.photos/900",
      imageAlt: "Gallery image 6",
    },
    {
      id: 11,
      hasImage: false,
    },
    // Fourth Row
    {
      id: 12,
      hasImage: true,
      imageSrc: "https://picsum.photos/300",
      imageAlt: "Gallery image 6",
    },
    {
      id: 13,
      hasImage: false,
    },
    {
      id: 14,
      hasImage: false,
    },
    {
      id: 15,
      hasImage: true,
      imageSrc: "https://picsum.photos/600",
      imageAlt: "Gallery image 6",
    },
 
    // Set rows
    ...Array.from({ length: 12 }, (_, index) => ({
      id: index + 16,
      hasImage: false,
    })),
  ];
 
  return (
    <StyledGalleryContainer>
      <StyledGridWrapper>
        {galleryItems.map((item) => (
          <StyledGridItem key={item.id} hasImage={item.hasImage}>
            {item.hasImage && item.imageSrc ? (
              <StyledImageContainer>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt || `Gallery image ${item.id + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={item.id < 4}
                />
              </StyledImageContainer>
            ) : (
              <StyledEmptyContainer></StyledEmptyContainer>
            )}
          </StyledGridItem>
        ))}
      </StyledGridWrapper>
    </StyledGalleryContainer>
  );
};
 
export default GallerySection;