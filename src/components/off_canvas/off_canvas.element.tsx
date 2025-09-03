"use client";
import styled from "@emotion/styled";
import { OffCanvasProps } from "./off_canvas.interface";

export const OffCanvasWrapper = styled.div<Pick<OffCanvasProps, "isOpen">>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  background: white;

  /* 🔹 Shadow on all sides */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);

  /* rounded corners only on the right side */
  border-radius: 0 16px 16px 0;

  transform: ${({ isOpen }) => (isOpen ? "scaleX(1)" : "scaleX(0)")};
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1);

  z-index: 999;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);

  &:hover {
    transform: rotate(90deg) scale(1.1);
    color: #ff5851;
  }
`;
