import { ReactNode } from "react";
import { StyledTitle } from "./Title.styles";

export type Props = {
  children: ReactNode;
};

function Title({ children }: Props) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
