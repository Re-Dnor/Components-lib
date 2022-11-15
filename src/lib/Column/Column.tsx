import React, { ReactNode } from "react";
import { StyledColumn } from "./Column.styles";

type Justify = "start" | "center" | "space-between" | "space-around" | "space-evenly" | "end";
type Align = "stretch" | "center" | "start" | "end";

export type Props = {
  children?: ReactNode | ReactNode[];
  justifyContent?: Justify;
  alignItems?: Align;
};

function Column({ children, alignItems, justifyContent }: Props) {
  return (
    <StyledColumn alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </StyledColumn>
  );
}

export default Column;
