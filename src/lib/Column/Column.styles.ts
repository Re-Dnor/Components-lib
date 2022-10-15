import styled from "styled-components";
import { Props } from "./Column";


export const StyledColumn = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
	justify-content: ${(props) => props.justifyContent};
`;