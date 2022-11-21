import { CheckboxProps } from "../types/Checkbox.types";
import { StyledCheckbox, StyledLabel } from "./Checkbox.styles";

export function Checkbox({ label, id, onChange, value, checked }: CheckboxProps) {
  return (
    <>
      <StyledCheckbox type="checkbox" id={id} onChange={onChange} value={value} checked={checked} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </>
  );
}
