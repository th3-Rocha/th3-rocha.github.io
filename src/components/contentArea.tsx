import React from "react";
import styled from "styled-components";

interface ContentAreaProps {
  children?: React.ReactNode;
  classNameTag?: string;
}

const ContentAreaDiv = styled.div`
  max-width: calc(100% - 3vw - 1rem); //100% do tamanho menos o gap da esquerda
  min-width: 0;
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    min-width: 0;
  }
`;
const ContentArea: React.FC<ContentAreaProps> = ({ children, classNameTag }) => {
  return <ContentAreaDiv className={classNameTag}>{children}</ContentAreaDiv>;
};

export default ContentArea;
