import styled from "styled-components";
import { RowProps } from "../types/Row.types";

export const StyledRow = styled.div<RowProps>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  gap: ${(props) => (props.gap ? "10px" : null)};
  margin: 10px;
`;
