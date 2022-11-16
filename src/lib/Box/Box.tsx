import React, { ReactNode } from "react";
import { StyledBox } from "./Box.styles";

type Justify = "start" | "center" | "space-between" | "space-around" | "space-evenly" | "end";
type Align = "stretch" | "center" | "start" | "end";

export type Props = {
  children?: ReactNode | ReactNode[];
  justifyContent?: Justify;
  alignItems?: Align;
};

function Box({ children, alignItems, justifyContent }: Props) {
  return (
    <StyledBox alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </StyledBox>
  );
}

export default Box;
