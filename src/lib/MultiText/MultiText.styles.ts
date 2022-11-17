import styled from "styled-components";
import { MultiTextProps } from "../types/MultiText.types";

export const StyledMultiText = styled.textarea<MultiTextProps>`
  height: ((props) => props.height && 100px);
  font-size: 15px;
  width: 100%;
  min-width: 200px;
  padding-left: 15px;
  border-radius: 15px;
  border: 2px solid grey;
  margin-bottom: 20px;
  resize: none;
`;
