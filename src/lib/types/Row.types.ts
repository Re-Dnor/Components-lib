import { ReactNode } from "react";
import { Justify, Align } from "../../types/index";

type SCCheck = 1 | 0;

export type RowProps = {
  children?: ReactNode | ReactNode[];
  justifyContent?: Justify;
  alignItems?: Align;
  width?: string | undefined;
  gap?: boolean | SCCheck;
};
