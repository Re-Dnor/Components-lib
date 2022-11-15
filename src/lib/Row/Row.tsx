import React, { ReactNode } from "react";
import { StyledRow } from "./Row.styles";

type Justify = "start" | "center" | "space-between" | "space-around" | "space-evenly" | "end";
type Align = "stretch" | "center" | "start" | "end";
type SCCheck = 1 | 0;

export type Props = {
  children?: ReactNode | ReactNode[];
  justifyContent?: Justify;
  alignItems?: Align;
  fill?: boolean | SCCheck;
  gap?: boolean | SCCheck;
};

function Row({ children, justifyContent, alignItems, fill, gap }: Props) {
  return (
    <StyledRow justifyContent={justifyContent} alignItems={alignItems} fill={fill ? 1 : 0} gap={gap ? 1 : 0}>
      {children}
    </StyledRow>
  );
}

export default Row;
