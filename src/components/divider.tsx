import React from "react";
import styled from "styled-components";

const DividerDiv = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    margin-top: 9rem;
  }
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    position: absolute;
    top: 20.1rem;
    width: 70%;
    z-index: -1;
  }
`;

const Divider = () => {
    return (
      <DividerDiv>
      </DividerDiv>
    );
  };
  
  export default Divider;