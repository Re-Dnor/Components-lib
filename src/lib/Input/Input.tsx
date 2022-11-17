import { InputProps } from "../types/Input.types";
import { StyledInput } from "./Input.styles";
import { StyledLabel } from "./Label.styles";

export function Input({ label, name, required, type, value, large }: InputProps) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} name={name} value={value} large={large} required={required} />
    </div>
  );
}
