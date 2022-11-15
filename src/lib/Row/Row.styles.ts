import styled from "styled-components";
import { Props } from "./Row";

export const StyledRow = styled.div<Props>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => (props.fill ? "80%" : null)};
  gap: ${(props) => (props.gap ? "10px" : null)};
  margin: 10px 0;
`;
