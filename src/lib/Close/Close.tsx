import React, { MouseEventHandler } from "react";
import { StyledClose } from "./Close.styles";

export type Color = "primary" | "danger" | "success" | "warning";

export type Props = {
  color?: Color;
  large?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Close({ color, large, onClick }: Props) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick && onClick(e);
  };

  return ( 
    <StyledClose
    color={color}
    large={large}
    onClick={ handleClick }
    />
  );
}

export default Close;