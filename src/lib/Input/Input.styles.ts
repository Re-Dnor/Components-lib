import styled from "styled-components";
import { StyledInputProps } from "../types/Input.types";

export const StyledInput = styled.input<StyledInputProps>`
  height: ${(props) => (props.large ? "45px" : "35px")};
  font-size: 15px;
  width: 100%;
  padding-left: 15px;
  border-radius: 15px;
  border: 2px solid grey;
  transition: 0.3s;
  margin-bottom: 20px;
`;
