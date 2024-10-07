import React from "react";
import styled from "styled-components";

interface LayoutContainerProps {
  children?: React.ReactNode;
  classNameTag?: string;
}

const LayoutContainerDiv = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    grid-template-columns: 32px 14fr;
  }
  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
  }
`;

const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
  classNameTag,
}) => {
  return (
    <LayoutContainerDiv className={classNameTag}>{children}</LayoutContainerDiv>
  );
};

export default LayoutContainer;
