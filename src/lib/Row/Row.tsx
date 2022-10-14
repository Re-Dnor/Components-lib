import React, { ReactNode } from "react";
import { StyledRow } from './Row.styles';

type Justify = 'start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'end';
type Align = 'stretch' | 'center' | 'start' | 'end';


export type Props = {
  children?: ReactNode | ReactNode[]
  justifyContent?: Justify;
  alignItems?: Align;
  fill?: boolean;
};

function Row({ children, justifyContent, alignItems, fill = true }: Props) {
  console.log(justifyContent, alignItems)
  return (
    <StyledRow justifyContent={ justifyContent } alignItems={ alignItems } fill={fill}>
      { children }
    </StyledRow>
  );
}

export default Row;