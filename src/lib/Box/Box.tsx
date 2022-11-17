import { BoxProps } from "../types/Box.types";
import { StyledBox } from "./Box.styles";

export function Box({ children, component, alignItems, justifyContent, onSubmit }: BoxProps) {
  return (
    <StyledBox as={component} alignItems={alignItems} justifyContent={justifyContent} onSubmit={onSubmit}>
      {children}
    </StyledBox>
  );
}
