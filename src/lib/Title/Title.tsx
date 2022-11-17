import { TitleProps } from "../types/Title.types";
import { StyledTitle } from "./Title.styles";

export function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>;
}
