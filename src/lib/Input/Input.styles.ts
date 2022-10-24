import styled from "styled-components";
import { Props } from "./Input";

export const StyledInput = styled.input<Props>`
  height: ${(props) => props.large ? "40px" : "30px"};
  font-size: 15px;
  width: 80%;
  padding-left: 15px;
  border-radius: 15px;
  border: 2px solid grey;
  transition: .7s;
  &: focus {
    background-color: rgb(235, 235, 235);
  }
`;