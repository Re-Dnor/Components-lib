import { MultiTextProps } from "../types/MultiText.types";
import { StyledMultiText } from "./MultiText.styles";

export function MultiText({ name, placeholder, required, height }: MultiTextProps) {
  return <StyledMultiText name={name} placeholder={placeholder} required={required} rows={height} />;
}
