import styled from "styled-components";
import { CloseProps } from "../types/Close.types";

export const StyledClose = styled.button<CloseProps>`
  width: 40px;
  height: 40px;
  border: 0;
  background-color: var(--light);
  position: relative;
  z-index: 1;
  margin: 10px auto;
  cursor: pointer;

  &: before {
    content: '+';
    color: var(--${(props) => (props.color ? props.color : "primary")});
    position: absolute;
    z-index: 2;
    transform: rotate(45deg);
    font-size: 50px;
    line-height: 1;
    top: -5px;
    left: 5px;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
  }

  &: after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background: var(--${(props) => (props.color ? props.color : "primary")});
    z-index: 1;
    transition: all 0.3s cubic-bezier(0.77, 0, 0.2, 0.85);
    transform: scale(0.01);
  }

  &: hover: after {
    transform: scale(1);
  }

  :hover:before {
    transform: scale(0.8) rotate(45deg);
    color: #fff;
  }
`;
