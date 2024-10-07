import React from "react";
import styled from "styled-components";

interface BottomContainerProps {
  children?: React.ReactNode;
  classNameTag?: string;
}

const BottomContainerDiv = styled.div`
  width: 100%;
  height: auto;
`;

const BottomContainer: React.FC<BottomContainerProps> = ({
  children,
  classNameTag,
}) => {
  return <BottomContainerDiv className={classNameTag}>{children}</BottomContainerDiv>;
};

export default BottomContainer;
