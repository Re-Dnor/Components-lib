import { MultiTextProps } from "../types/MultiText.types";
import { StyledMultiText } from "./MultiText.styles";

export function MultiText({ name, placeholder, required, rows }: MultiTextProps) {
  return <StyledMultiText name={name} placeholder={placeholder} required={required} rows={rows} />;
}
