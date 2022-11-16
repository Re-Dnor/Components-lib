import styled from "styled-components";
import { Props } from "./Box";

export const StyledBox = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: 100vw;
  height: 100vh;
`;
