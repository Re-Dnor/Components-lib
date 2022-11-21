import styled from "styled-components";
import { StyledModalType } from "../types/Modal.types";

export const StyledModal = styled.div<StyledModalType>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledCenterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  min-height: 400px;
  background: var(--light);
  border: 2px solid #000;
  boxshadow: 24;
`;

export const StyledCloseBtn = styled.div`
  position: absolute;
  right: 10px;
  top: 0;
`;
