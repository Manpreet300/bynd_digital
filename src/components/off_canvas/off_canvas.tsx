"use client";
import React from "react";
import { OffCanvasProps } from "./off_canvas.interface";
import {
  OffCanvasWrapper,
  CloseButton,
  OffCanvasHeader,
  OffCanvasBody,
  NavList,
  NavItem,
  NavLink,
  GetInTouchButton,
} from "./off_canvas.element";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";

export const OffCanvas: React.FC<OffCanvasProps> = ({ isOpen, onClose }) => {
  return (
    <OffCanvasWrapper isOpen={isOpen}>
      <OffCanvasHeader>
        <CloseButton onClick={onClose}>×</CloseButton>
      </OffCanvasHeader>

      <OffCanvasBody>
        <nav>
          <NavList>
            <NavItem>
              <NavLink href="#">
                <HomeIcon /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <InfoIcon /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <WorkIcon /> Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <MailIcon /> Contact
              </NavLink>
            </NavItem>
          </NavList>
        </nav>
        <GetInTouchButton href="#">Get in Touch</GetInTouchButton>
      </OffCanvasBody>
    </OffCanvasWrapper>
  );
};