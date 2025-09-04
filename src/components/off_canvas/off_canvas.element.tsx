"use client";
import styled from "@emotion/styled";
import { OffCanvasProps } from "./off_canvas.interface";
import { palettes } from "@/components/themes/palettes";

export const OffCanvasWrapper = styled.div<Pick<OffCanvasProps, "isOpen">>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 500px; /* 👈 Updated width */
  background: ${palettes.white}; /* 👈 Updated background */

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

 

  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);

  z-index: 1000; /* 👈 Increased z-index */
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: transparent;
  border: 2px solid ${palettes.textDark};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${palettes.textDark};
  transition: all 0.3s ease;

  &:hover {
    transform: rotate(90deg);
    background: ${palettes.bynd_red};
    color: ${palettes.white};
    border-color: ${palettes.bynd_red};
  }
`;

export const OffCanvasHeader = styled.header`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
`;

export const OffCanvasBody = styled.main`
  flex-grow: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 1.5rem 0;
`;

export const NavLink = styled.a`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${palettes.textDark};
  text-decoration: none;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    color: ${palettes.bynd_red};
  }
`;

export const GetInTouchButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: ${palettes.bynd_red};
  color: ${palettes.white};
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: #ff6d63;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;



export const FooterText = styled.p`
  color: ${palettes.gray};
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${palettes.textDark};
    transition: color 0.3s ease;

    &:hover {
      color: ${palettes.bynd_red};
    }
  }
`;