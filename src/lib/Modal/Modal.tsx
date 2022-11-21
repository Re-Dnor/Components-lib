import React from "react";
import { StyledModal, StyledCenterBox, StyledCloseBtn } from "./Modal.styles";
import { ModalType } from "../types/Modal.types";
import { Close } from "../Close/Close";

export function Modal({ children, open, handleClose }: ModalType) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      handleClose(false);
    }
  };

  return (
    <StyledModal open={open} onClick={handleClick}>
      <StyledCenterBox>
        <StyledCloseBtn>
          <Close onClick={() => handleClose(false)} />
        </StyledCloseBtn>
        {children}
      </StyledCenterBox>
    </StyledModal>
  );
}
