import React from "react";
import { StyledInput } from "./Input.styles";

export type Props = {
  type?: string;
  name?: string;
  value?: string;
  large?: boolean;
};

function Input({ type, name, value, large }: Props) {
  return (
  <StyledInput
  type={ type }
  name={ name }
  value={ value }
  large={ large }
  />
  );
}

export default Input;