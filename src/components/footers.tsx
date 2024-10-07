import React from "react";
import styled from "styled-components";

interface FootersProps {
  children?: React.ReactNode;
  classNameTag?: string;
}

const FootersDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Footers: React.FC<FootersProps> = ({ children, classNameTag }) => {
  return (
    <FootersDiv className={classNameTag}>{children}</FootersDiv>
  );
};

export default Footers;
