import styled from "styled-components";
import { BoxProps } from "../types/Box.types";

export const StyledBox = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: 100vw;
  height: 100vh;
`;
