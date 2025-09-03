"use client";
import React from "react";
import { OffCanvasProps } from "./off_canvas.interface";
import { OffCanvasWrapper, CloseButton } from "./off_canvas.element";

export const OffCanvas: React.FC<OffCanvasProps> = ({ isOpen, onClose }) => {
  return (
    <OffCanvasWrapper isOpen={isOpen}>
      <CloseButton onClick={onClose}>×</CloseButton>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </OffCanvasWrapper>
  );
};
