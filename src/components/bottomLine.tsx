import React from "react";
import styled from "styled-components";



interface BottomLineProps {
  children?: React.ReactNode;
  classNameTag?: string;
}



const BottomLineDiv = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-left: 3rem;
  margin-right: 3rem;
  width: calc(100% - 6rem);
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    width: 100%;
    margin: 0;
  }
`;


const BottomLine: React.FC<BottomLineProps> = ({ children, classNameTag }) => {
    return (
      <BottomLineDiv className={classNameTag}>
        {children}
      </BottomLineDiv>
    );
  };
  
  export default BottomLine;