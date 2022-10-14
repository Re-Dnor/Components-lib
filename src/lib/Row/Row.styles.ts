import styled from 'styled-components';
import { Props } from './Row';


export const StyledRow = styled.div<Props>`
  display: flex;
  align-items: ${(props) => props.alignItems};
	justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.fill ? '100%' : null}
  margin: 20px
`;