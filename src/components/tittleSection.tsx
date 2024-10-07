import React from "react";
import styled from "styled-components";

interface TitleSectionProps {
  children?: React.ReactNode;
  classNameTag?: string;
}

const TitleSectionDiv = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: flex-end;
  margin-right: -6.5rem;
  margin-top: 55rem;
  @media (max-width: ${({ theme }) => theme.screen.tablet}) {
    display: none;
  }
`;

const TitleSection: React.FC<TitleSectionProps> = ({ children, classNameTag }) => {
  return (
    <TitleSectionDiv className={classNameTag}>{children}</TitleSectionDiv>
  );
};

export default TitleSection;
