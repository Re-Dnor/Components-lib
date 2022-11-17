import { RowProps } from "../types/Row.types";
import { StyledRow } from "./Row.styles";

export function Row({ children, justifyContent, alignItems, width, gap }: RowProps) {
  if (!width) {
    width = "50%";
  }
  return (
    <StyledRow justifyContent={justifyContent} alignItems={alignItems} width={width} gap={gap ? 1 : 0}>
      {children}
    </StyledRow>
  );
}
