import React from "react";
import styled from "styled-components";

interface MainContainerProps {
  children?: React.ReactNode;
  classNameTag?: string;
}

const MainContainerDiv = styled.div`
  //container de tudo
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  transition: 0.3s ease;
`;

const MainContainer: React.FC<MainContainerProps> = ({ children, classNameTag }) => {
  return (
    <MainContainerDiv className={classNameTag}>{children}</MainContainerDiv>
  );
};

export default MainContainer;
