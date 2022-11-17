import { CloseProps } from "../types/Close.types";
import { StyledClose } from "./Close.styles";

export function Close({ color, large, onClick }: CloseProps) {
  return <StyledClose color={color} large={large} onClick={onClick} />;
}
