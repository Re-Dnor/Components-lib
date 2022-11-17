import styled from "styled-components";
import { SidebarBtnProps } from "../types/Sidebar.types";

export const StyledSidebarSpan = styled.span`
  display: block;
  padding: 20px;
  &: before {
    left: 0;
    top: 0;
    transition-duration: 0.4s;
    content: "";
    width: 4px;
    height: 0;
    position: absolute;
    transition: all 0.4s linear;
    background: var(--primary);
  }
  &: after {
    right: 0;
    bottom: 0;
    transition-duration: 0.4s;
    content: "";
    width: 4px;
    height: 0;
    position: absolute;
    transition: all 0.4s linear;
    background: var(--primary);
  }
  &: hover {
    height: 100%;
  }
`;

export const StyledSidebarBtn = styled.button<SidebarBtnProps>`
  width: 100%;
  margin-bottom: 10px;
  display: inline-block;
  position: relative;
  border: 1px solid black;
  color: var(--${(props) => (props.active ? "light" : "dark")});;
  text-shadow: 0px 0px 5px white;
  font-size: 18px;
  cursor: pointer;
  background: var(--${(props) => (props.active ? "primary" : "light")});
  &: after {
    left: 0;
    top: 0;
    transition-duration: 0.4s;
    content: "";
    width: 0;
    height: 4px;
    position: absolute;
    transition: all 0.4s linear;
    background: var(--primary);
  }
  &: before {
    right: 0;
    bottom: 0;
    transition-duration: 0.4s;
    content: "";
    width: 0;
    height: 4px;
    position: absolute;
    transition: all 0.4s linear;
    background: var(--primary);
  }
  &: hover: before {
    width: 100%;
  }
  &: hover: after {
    width: 100%;
  }
  &: hover ${StyledSidebarSpan}: before {
    height: 100%;
  }
  &: hover ${StyledSidebarSpan}: after {
    height: 100%;
  }
  @media (max-width: 850px) {
    font-size: 14px
  }
`;
