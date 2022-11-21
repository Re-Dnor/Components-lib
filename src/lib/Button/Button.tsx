import React, { MouseEventHandler } from "react";
import { ButtonProps } from "../types/Button.types";
import { StyledButton } from "./Button.styles";

export function Button({ children, color, disabled, size, onClick }: ButtonProps) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (disabled) return;
    onClick && onClick(e);
  };

  return (
    <StyledButton color={color} onClick={handleClick} disabled={disabled} size={size}>
      {children}
    </StyledButton>
  );
}
