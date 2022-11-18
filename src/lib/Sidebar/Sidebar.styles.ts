import styled from "styled-components";

export const StyledSidebar = styled.aside`
  border-right: 1px solid grey;
  background-color: #f5f5f5;
  padding: 10px;
  width: 20%;
  height: 100vh;
  text-align: left;
  overflow: hidden;
  @media (max-width: 850px) {
    width: 152px;
  }
`;
