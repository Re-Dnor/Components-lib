import { CheckboxProps } from "../types/Checkbox.types";
import { StyledCheckbox, StyledLabel } from "./Checkbox.styles";

export function Checkbox({ label, id }: CheckboxProps) {
  return (
    <>
      <StyledCheckbox type="checkbox" id={id} />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </>
  );
}
