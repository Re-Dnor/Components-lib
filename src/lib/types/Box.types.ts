import { ReactNode, ElementType } from "react";
import { Justify, Align } from "../../types/index";

export type BoxProps = {
  children?: ReactNode | ReactNode[];
  component?: ElementType;
  justifyContent?: Justify;
  alignItems?: Align;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};
