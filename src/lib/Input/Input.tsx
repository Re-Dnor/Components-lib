import React from "react";
import { StyledInput } from "./Input.styles";
import { StyledLabel } from "./Label.styles";

export type Props = {
  label: string;
  name: string;
  type?: string;
  value?: string;
  large?: boolean;
};

function Input({ label, name, type, value, large }: Props) {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} name={name} value={value} large={large} />
    </div>
  );
}

export default Input;
